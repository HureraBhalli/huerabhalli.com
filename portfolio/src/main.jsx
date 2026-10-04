import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminPanel from './admin/AdminPanel';
import ProjectDetail from './pages/ProjectDetail';
import CategoryPage from './pages/CategoryPage';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public site */}
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<CategoryPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />

        {/* Admin panel */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);