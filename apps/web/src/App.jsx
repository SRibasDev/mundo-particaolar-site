import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import StructurePage from './pages/StructurePage';
import GalleryPage from './pages/GalleryPage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/estrutura" element={<StructurePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}
