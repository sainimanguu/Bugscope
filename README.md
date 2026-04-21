#BugScope - Error Tracking System

Overview
BugScope is an error tracking and monitoring system built with Node.js, Express, MongoDB, and React. It helps development teams catch and fix errors faster with AI-powered explanations and team collaboration features.

Technology Stack

Backend:

- Node.js and Express
- MongoDB Atlas for database
- JWT for authentication
- Winston for logging
- Nodemailer for email
- Hugging Face API for AI explanations

Frontend:

- React
- Axios for API calls
- Recharts for data visualization
- Tailwind CSS for styling

Features

Error Logging and Grouping
Automatically groups similar errors together to reduce dashboard noise and help teams focus on unique issues.

AI-Powered Explanations
Uses Hugging Face API to automatically explain what went wrong and suggest fixes for each error.

User Authentication
Login and registration system with JWT tokens. Tokens are valid for 7 days.

Email Invitations
Admin users can invite team members via email. Invitation links expire after 7 days.

Error Priority System
Set priority levels for errors as Critical, Urgent, High, Medium, or Low to help teams prioritize what to fix first.

Role-Based Access Control
Admin users have full system access. Contributor users have limited access for viewing and commenting on errors.

Activity Logging
Complete audit trail that tracks who made changes, what changes were made, and when they happened.

Advanced Error Filtering
Filter errors by multiple criteria at once: severity level, priority, status, and environment.

Comments and Error Timeline
Team members can discuss errors in comments. Each error shows a complete timeline of creation, assignment, status changes, comments, and resolution.

Project Structure

bugscope/
├── backend/
│ ├── config/
│ │ ├── db.js
│ │ └── logger.js
│ ├── middleware/
│ │ ├── auth.js
│ │ ├── rbac.js
│ │ └── activityLogger.js
│ ├── models/
│ │ ├── Error.js
│ │ ├── User.js
│ │ ├── Comment.js
│ │ ├── Invitation.js
│ │ └── ActivityLog.js
│ ├── routes/
│ │ ├── errorRoutes.js
│ │ ├── authRoutes.js
│ │ ├── commentRoutes.js
│ │ ├── priorityRoutes.js
│ │ ├── invitationRoutes.js
│ │ ├── userRoutes.js
│ │ └── adminRoutes.js
│ ├── utils/
│ │ ├── errorGrouping.js
│ │ ├── aiExplainer.js
│ │ └── emailSender.js
│ ├── server.js
│ ├── package.json
│ └── .env (not in git)
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── ErrorList.jsx
│ │ │ ├── Charts.jsx
│ │ │ ├── AdminPanel.jsx
│ │ │ └── Login.jsx
│ │ ├── pages/
│ │ │ ├── ErrorDetailPage.jsx
│ │ │ ├── DashboardPage.jsx
│ │ │ └── AdminPage.jsx
│ │ ├── App.jsx
│ │ ├── index.js
│ │ └── styles/
│ ├── public/
│ ├── package.json
│ └── .env (not in git)
│
├── .gitignore
└── README.md

API Endpoints

Authentication
POST /auth/register - Create new user account
POST /auth/login - Login user
POST /auth/logout - Logout user

Errors
POST /api/errors/log - Log a new error
GET /api/errors - Get all errors with optional filters
GET /api/errors/:id - Get details of single error
GET /api/errors/:id/details - Get error with comments and timeline
POST /api/errors/:id/explain - Get AI explanation and fixes
PATCH /api/errors/:id/status - Change error status
PATCH /api/errors/:id/priority - Change error priority
PATCH /api/errors/:id/assign - Assign error to user

Comments
POST /api/errors/:id/comments - Add comment to error
GET /api/errors/:id/comments - Get all comments on error
DELETE /api/comments/:id - Delete comment

Users and Admin
GET /api/users - List all users
PATCH /api/users/:id/role - Change user role
DELETE /api/users/:id - Delete user
GET /api/admin/activity-logs - View activity logs
GET /api/admin/stats/:projectId - Get error statistics

Frontend Pages

Login Page
User login and registration forms with email and password validation.

Dashboard
Main page showing all errors with real-time updates. Users can filter errors by severity, priority, status, and environment.

Error Detail Page
Shows complete error information including AI explanation, suggested fixes, comments, and timeline of all changes.

Error List
Sortable and filterable list of errors. Click any error to see full details.

Charts
Visualizations showing error distribution by severity, priority status, and environment.

Admin Panel
Admin-only area for managing users, viewing activity logs, and managing system settings.

Getting Started

Backend Setup

cd backend
npm install

Create .env file with these variables:
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bugscope
JWT_SECRET=your_jwt_secret_key_here
HUGGING_FACE_API_KEY=hf_your_token_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
FRONTEND_URL=http://localhost:3000

Start the server:
npm run dev

Frontend Setup

cd frontend
npm install

Create .env file with:
REACT_APP_API_URL=http://localhost:5000

Start the frontend:
npm start

Frontend will run on http://localhost:3000

Testing

Backend has 20 tests covering authentication, error logging, comments, assignment, and timeline features. All tests are passing.

Test Results:

- Test 1: Get fresh tokens
- Test 2: Add comment to error
- Test 3: View comments on error
- Test 4: Delete own comment
- Test 5: Try delete others comment
- Test 6: Get error details with timeline
- Test 7: Assign error to user
- Test 8: Complete error lifecycle

Default Test Credentials

Admin Account:
Email: admin1@bugscope.com
Password: Admin@123
Role: admin

Contributor Account:
Email: newcontrib@bugscope.com
Password: NewContrib@123
Role: contributor

Database Setup

BugScope uses MongoDB Atlas for the database. Collections created:

Errors - stores error reports and details
Users - stores user accounts and roles
Comments - stores comments on errors
Invitations - stores email invitations
ActivityLogs - stores audit trail of all actions

How It Works

1. Developer logs an error using the SDK or API
2. Error is grouped with similar errors
3. AI explains the error and suggests fixes
4. Admin or team member sees error on dashboard
5. Admin assigns error to a team member
6. Team member investigates and comments
7. Team member marks error as resolved
8. Complete timeline and history is preserved

Contributors

Garv - Backend development
Umang - Frontend development

License

MIT License

Copyright (c) 2026 BugScope

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Support

For issues or questions about BugScope, create a GitHub issue in the repository.

Contact the development team with any questions about deployment or usage.
