import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ServiceAudit from './pages/ServiceAudit';
import ServiceDev from './pages/ServiceDev';
import ServiceAnalysis from './pages/ServiceAnalysis';
import CasePage from './pages/CasePage';
import CareerPage from './pages/CareerPage';
import { AppStorePage, AppSalesPage, WebSalesPage, HrPage } from './pages/ServicePages';
import StartupsPage from './pages/StartupsPage';
import CoursePage from './pages/CoursePage';
import LegalPage from './pages/LegalPage';
import Seo from './components/Seo';
import './App.css';

function App() {
  return (
    <Router>
      <Seo />
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/services/audit" element={<ServiceAudit />} />
        <Route path="/services/dev" element={<ServiceDev />} />
        <Route path="/services/analysis" element={<ServiceAnalysis />} />
        <Route path="/cases/:id" element={<CasePage />} />
        <Route path="/services/appstore" element={<AppStorePage />} />
        <Route path="/services/app-sales" element={<AppSalesPage />} />
        <Route path="/services/web-sales" element={<WebSalesPage />} />
        <Route path="/services/hr" element={<HrPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/course" element={<Navigate to="/#contact" replace />} />
        <Route path="/course/login" element={<Navigate to="/course" replace />} />
        <Route path="/course/dashboard" element={<Navigate to="/course" replace />} />
        <Route path="/admin" element={<Navigate to="/" replace />} />
        <Route path="/privacy" element={<LegalPage section="privacy" />} />
        <Route path="/terms" element={<LegalPage section="terms" />} />
        <Route path="/cookies" element={<LegalPage section="cookies" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
