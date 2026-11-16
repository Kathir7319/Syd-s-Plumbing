import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmergencyBanner from './components/EmergencyBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutContact from './pages/AboutContact';
import NotFound from './pages/NotFound';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './data/servicesData';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
        {/* Top Emergency Dispatch Notification */}
        <EmergencyBanner />

        {/* Global Multi-Page Navigation Header */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Main Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
            <Route path="/services/:slug" element={<ServiceDetail onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<About onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-contact" element={<AboutContact onOpenQuote={handleOpenQuote} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Quick Call Button for Mobile (Fixed bottom right) */}
        <div className="fixed bottom-5 right-5 z-40 sm:hidden">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-full shadow-2xl shadow-amber-500/50 border-2 border-white active:scale-95 transition-transform"
            aria-label="Call Syd's Plumbing directly"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span className="text-xs">Call Syd</span>
          </a>
        </div>

        {/* Interactive Quote / Estimate Modal */}
        <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
      </div>
    </Router>
  );
}
