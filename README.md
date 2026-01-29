# Taste-Mart | Restaurant Management System

## Project Description
Taste-Mart is a full-stack restaurant management system that allows users to view the menu and make table reservations. The backend is built with **Node.js**, **Express**, and **MongoDB**, while the frontend is a responsive **HTML/CSS/JS** interface. Users can view menu items with images, filter dishes by category, and book reservations online.

---

## Features
- **Menu Management**: Admins can create, update, and delete menu items.
- **Reservation Management**: Admins can manage reservations; users can make reservations but cannot modify others'.
- **Authentication**: Users register and login securely.
- **RBAC**: Admin role has full access; user role has read-only access.
- **Frontend Integration**: Users can interact with backend via forms and menus.

---

## Architecture & Technologies
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: HTML, CSS, Bootstrap, JavaScript
- **Security**:
  - Password hashing with bcrypt
  - JWT for authentication
  - Middleware for token verification and role checking
- **Project Structure (MVC)**:
/controllers - request handling logic
/models - Mongoose schemas
/routes - API endpoints
/middleware - authentication & RBAC
/public - frontend HTML, CSS, images
server.js - application entry point

---

## Authentication & Role-Based Access Control (RBAC)
Registration: Users can register using email and password.

Login: Users receive a JWT token after successful login.

JWT Middleware: Verifies token for protected routes.

RBAC:

Admin: Full access to POST, PUT, DELETE endpoints

User: Only GET endpoints allowed


## Installation

1. Clone this repository:
git clone https://github.com/yourusername/taste-mart.git
cd taste-mart

2. Install dependencies:
npm install

3. Create a .env file in the root folder:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/restaurant_db
JWT_SECRET=your_secret_key

5. Start the server
node server.js

6. Open index.html or run a live server for frontend testing

## Project structure
<img width="226" height="719" alt="image" src="https://github.com/user-attachments/assets/7239b76b-db91-4b54-8af4-08c7f584873a" />


## API Routes
Auth

POST	- /api/auth/register	- Register a new user	Public
POST	- /api/auth/login	- Login and get JWT	Public

Menu

GET	- /api/menu	- Get all menu items	- Public
GET	- /api/menu/:id	- Get menu item by ID	- Public
POST - /api/menu	- Create menu item - Admin
PUT	- /api/menu/:id	- Update menu item	- Admin
DELETE	- /api/menu/:id	- Delete menu item - Admin
Reservations

GET	- /api/reservations	- Get all reservations	- Public
GET	- /api/reservations/:id	- Get reservation by ID	- Public
POST - /api/reservations - Create reservation - Admin
PUT - /api/reservations/:id - Update reservation - Admin
DELETE - /api/reservations/:id - Delete reservation - Admin

## Screenshots
Admin:
<img width="1563" height="618" alt="Снимок экрана 2026-01-29 231822" src="https://github.com/user-attachments/assets/b0f8511c-ed77-4541-a423-2292fec9a961" />
<img width="1553" height="640" alt="Снимок экрана 2026-01-29 231909" src="https://github.com/user-attachments/assets/308a9402-fc2a-479f-b280-29e4221ddad5" />
<img width="1527" height="748" alt="Снимок экрана 2026-01-29 232457" src="https://github.com/user-attachments/assets/2bc8f375-fddb-4db6-bc55-609918fa8eae" />

User:
<img width="1528" height="613" alt="Снимок экрана 2026-01-29 232807" src="https://github.com/user-attachments/assets/20e49e25-66ea-444a-896d-629f53c0c71f" />
<img width="1557" height="645" alt="Снимок экрана 2026-01-29 233126" src="https://github.com/user-attachments/assets/bd8a8424-034e-472c-ac65-da85e810783d" />






