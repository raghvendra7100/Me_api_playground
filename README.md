# MERN Portfolio Playground

A personal portfolio web application built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This project serves as both an **API playground** and a **frontend portfolio site** to showcase profile, skills, projects, and a downloadable resume.  

---

## Features
- Profile section with bio, education, and external links  
- Skills section with categorized technical skills  
- Projects section showcasing personal projects with details  
- Dark mode support  
- Resume download option  
- Optional search page to search across skills and projects  
- Modern UI built with TailwindCSS and shadcn/ui  

---

## Tech Stack

**Frontend**  
- React with Vite  
- TailwindCSS v4  
- shadcn/ui components  
- React Router  

**Backend**  
- Node.js  
- Express.js  
- MongoDB Atlas with Mongoose  

**Deployment Options**  
- AWS EC2 with Nginx + PM2  
- Render or Vercel (alternative)  

---

## Project Structure
```
Me_api_playground/
├── backend/          # Express API (profile, skills, projects)
│   ├── models/       # Mongoose schemas
│   ├── routes/       # Express routes
│   └── server.js     # Main server entry
│
├── frontend/         # React + Vite frontend
│   ├── public/       # Static assets (resume.pdf, favicon, etc.)
│   ├── src/
│   │   ├── components/   # UI components (Navbar, ThemeToggle, etc.)
│   │   ├── pages/        # Page components (Profile, Skills, Projects, etc.)
│   │   └── App.jsx       # Main application router
│   └── index.html
│
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)  
- npm or yarn  
- MongoDB Atlas account (or local MongoDB)  

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```
PORT=5000
MONGODB_URI=your-mongodb-atlas-uri
```

Run the server:
```bash
node server.js
```

### Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file in the `frontend/` directory for local development:
```
VITE_API_URL=http://localhost:5000
```

Run the development server:
```bash
npm run dev
```

---

## Deployment (AWS Example)

1. Launch an EC2 instance (Ubuntu 22.04, t2.micro free tier).  
2. Install Node.js, Git, and Nginx.  
3. Clone the repository and install dependencies.  
4. Use PM2 to keep the backend running.  
5. Build the frontend with `npm run build`.  
6. Configure Nginx to serve the React build and proxy `/api` to the backend.  

---


## Author

**Your Name**  
