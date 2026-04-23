import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import BlogPost from './pages/BlogPost';
import ServiceAudit from './pages/ServiceAudit';
import ServiceDev from './pages/ServiceDev';
import ServiceAnalysis from './pages/ServiceAnalysis';
import CasePage from './pages/CasePage';
import { AppStorePage, AppSalesPage, WebSalesPage } from './pages/ServicePages';
import CoursePage from './pages/CoursePage';
import CourseLogin from './pages/CourseLogin';
import CourseDashboard from './pages/CourseDashboard';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin_auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const ProtectedCourseRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('course_auth') !== null;
  return isAuthenticated ? children : <Navigate to="/course/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/services/audit" element={<ServiceAudit />} />
        <Route path="/services/dev" element={<ServiceDev />} />
        <Route path="/services/analysis" element={<ServiceAnalysis />} />
        <Route path="/cases/:id" element={<CasePage />} />
        <Route path="/services/appstore" element={<AppStorePage />} />
        <Route path="/services/app-sales" element={<AppSalesPage />} />
        <Route path="/services/web-sales" element={<WebSalesPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/login" element={<CourseLogin />} />
        <Route path="/course/dashboard" element={<ProtectedCourseRoute><CourseDashboard /></ProtectedCourseRoute>} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
