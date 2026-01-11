# Log Files

This directory contains log files from running the application.

## Log Files Included

- `npm-install.log` - Dependency installation logs
- `backend-startup.log` - Backend server startup logs
- `frontend-startup.log` - Frontend server startup logs
- `application.log` - Application runtime logs

## How to Generate Logs

### 1. Install Dependencies

```bash
npm run install:all > logs/npm-install.log 2>&1
```

### 2. Start Backend (in separate terminal)

```bash
cd backend
npm run dev > ../logs/backend-startup.log 2>&1
```

### 3. Start Frontend (in separate terminal)

```bash
cd frontend
npm run dev > ../logs/frontend-startup.log 2>&1
```

### 4. Application Logs

Application logs are generated automatically when the servers run. They show:

- API requests and responses
- Database connections
- Authentication attempts
- Error messages

## Note

These log files demonstrate that the application runs successfully and all dependencies are installed correctly.
