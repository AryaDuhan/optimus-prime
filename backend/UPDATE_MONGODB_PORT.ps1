# PowerShell script to update MongoDB port to 27018
# Run this script as Administrator

Write-Host "=== MongoDB Port Configuration Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "⚠️  WARNING: This script requires Administrator privileges!" -ForegroundColor Yellow
    Write-Host "Please run PowerShell as Administrator and try again." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To run as Administrator:" -ForegroundColor White
    Write-Host "1. Right-click PowerShell" -ForegroundColor Gray
    Write-Host "2. Select 'Run as Administrator'" -ForegroundColor Gray
    Write-Host "3. Navigate to this directory" -ForegroundColor Gray
    Write-Host "4. Run: .\UPDATE_MONGODB_PORT.ps1" -ForegroundColor Gray
    exit 1
}

$configPath = "C:\Program Files\MongoDB\Server\8.0\bin\mongod.cfg"

# Check if config file exists
if (-not (Test-Path $configPath)) {
    Write-Host "❌ MongoDB config file not found at: $configPath" -ForegroundColor Red
    Write-Host "Please check your MongoDB installation path." -ForegroundColor Yellow
    exit 1
}

Write-Host "Found MongoDB config: $configPath" -ForegroundColor Green
Write-Host ""

# Stop MongoDB service
Write-Host "Step 1: Stopping MongoDB service..." -ForegroundColor Cyan
try {
    Stop-Service MongoDB -ErrorAction Stop
    Write-Host "✅ MongoDB service stopped" -ForegroundColor Green
    Start-Sleep -Seconds 2
} catch {
    Write-Host "⚠️  Could not stop MongoDB service: $_" -ForegroundColor Yellow
    Write-Host "You may need to stop it manually: net stop MongoDB" -ForegroundColor Yellow
}

# Read config file
Write-Host ""
Write-Host "Step 2: Reading config file..." -ForegroundColor Cyan
$content = Get-Content $configPath -Raw

# Update port
if ($content -match 'port:\s*\d+') {
    $content = $content -replace 'port:\s*\d+', 'port: 27018'
    Write-Host "✅ Updated port to 27018" -ForegroundColor Green
} else {
    # Add net section if it doesn't exist
    if ($content -notmatch 'net:') {
        $content += "`nnet:`n  port: 27018`n"
        Write-Host "✅ Added net section with port 27018" -ForegroundColor Green
    }
}

# Write updated config
Write-Host ""
Write-Host "Step 3: Writing updated config..." -ForegroundColor Cyan
try {
    Set-Content $configPath -Value $content -NoNewline
    Write-Host "✅ Config file updated successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Error writing config file: $_" -ForegroundColor Red
    exit 1
}

# Start MongoDB service
Write-Host ""
Write-Host "Step 4: Starting MongoDB service..." -ForegroundColor Cyan
try {
    Start-Service MongoDB -ErrorAction Stop
    Write-Host "✅ MongoDB service started" -ForegroundColor Green
    Start-Sleep -Seconds 3
} catch {
    Write-Host "❌ Could not start MongoDB service: $_" -ForegroundColor Red
    Write-Host "Please start it manually: net start MongoDB" -ForegroundColor Yellow
    exit 1
}

# Verify port
Write-Host ""
Write-Host "Step 5: Verifying MongoDB is running on port 27018..." -ForegroundColor Cyan
$portCheck = netstat -ano | Select-String ":27018"
if ($portCheck) {
    Write-Host "✅ MongoDB is running on port 27018!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Connection string for MongoDB Compass:" -ForegroundColor Cyan
    Write-Host "  mongodb://localhost:27018" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Connection string for backend/.env:" -ForegroundColor Cyan
    Write-Host "  MONGODB_URI=mongodb://localhost:27018/primetrade_db" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  Could not verify port 27018. Please check manually." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Configuration Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Update backend/.env with: MONGODB_URI=mongodb://localhost:27018/primetrade_db" -ForegroundColor White
Write-Host "2. Connect MongoDB Compass using: mongodb://localhost:27018" -ForegroundColor White
Write-Host "3. Start your backend: cd backend && npm run dev" -ForegroundColor White
