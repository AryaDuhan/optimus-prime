# Frontend Developer Intern Task

Web app with authentication and dashboard built with Next.js and Express.js.

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Setup

1. Install dependencies:

```bash
npm run install:all
```

2. Create `backend/.env`:

**For Local MongoDB:**

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/primetrade_db
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

**For MongoDB Atlas (Cloud):**

```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/primetrade_db
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

**Note:** If MongoDB connection fails, see `MONGODB_SETUP.md` for setup instructions.

3. Create `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Run backend:

```bash
npm run dev:backend
```

5. Run frontend:

```bash
npm run dev:frontend
```

6. Open http://localhost:3000

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Protected routes and API endpoints
- Dashboard with tasks CRUD operations
- Search and filter functionality
- Form validation (client and server side)
- Responsive design

## API Testing

Import `backend/postman_collection.json` into Postman to test all API endpoints.

## Scalability

See `SCALABILITY.md` for notes on scaling this application for production.

## Log Files

Log files are included in the `logs/` directory:

- `npm-install.log` - Dependency installation logs
- `backend-startup.log` - Backend server startup logs
- `frontend-startup.log` - Frontend server startup logs
- `application.log` - Application runtime logs

These logs demonstrate that the application runs successfully.
