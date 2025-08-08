import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FloatingButton from './components/FloatingButton';
import TaxPlanning from './pages/services/TaxPlanning';
import GSTServices from './pages/services/GSTServices';
import AuditAssurance from './pages/services/AuditAssurance';
import BusinessAdvisory from './pages/services/BusinessAdvisory';
import StartupIncorporation from './pages/services/StartupIncorporation';
import AccountingServices from './pages/services/AccountingServices';
import TaxLitigation from './pages/services/TaxLitigation';
import Resources from './pages/Resources';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Features from './pages/Features';
import WhyChooseUs from './pages/WhyChooseUs';
import Demo from './pages/Demo';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
{/*           <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/startup-incorporation" element={<StartupIncorporation />} />
          <Route path="/services/accounting-services" element={<AccountingServices />} />
          <Route path="/services/tax-planning" element={<TaxPlanning />} />
          <Route path="/services/gst-services" element={<GSTServices />} />
          <Route path="/services/audit-assurance" element={<AuditAssurance />} />
          <Route path="/services/business-advisory" element={<BusinessAdvisory />} />
          <Route path="/services/tax-litigation" element={<TaxLitigation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/features" element={<Features />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <FloatingButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
