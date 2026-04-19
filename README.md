hi# 📚 Digital Library System API 

A secure and scalable RESTful API for managing a digital library system. This project demonstrates authentication, role-based access control,application advanced security, and full CRUD operations using Node.js, Express, and MongoDB.

---

## 🚀 Features

### 👤 Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (Admin / Reader)
- Secure password hashing using bcrypt

### 📚 Book Management
- Admin-only book creation, update, and deletion
- Authenticated users can view all books
- Get single book by ID
- Search books by name or author
- Filter books by genre
- Pagination support

### 🔐 Security
- Protected routes using JWT middleware
- Admin-only route protection
- Helmet for security headers
- Rate limiting to prevent abuse
- Input validation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- dotenv
- Helmet
- Morgan
- Winston 
- express-rate-limit

---

```
## 📁 Project Structure

project/

│
├── controllers/
│   ├── authController.js
│   └── bookController.js
│
├── models/
│   ├── user.js
│   └── book.js
│

├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
    └── loginRateLimit.js
├── securityInfo/
│   ├── appLogs.js     
│
├── server.js
└── .env

---


