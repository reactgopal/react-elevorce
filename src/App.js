import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

// Main Components
import DataDeletion from './MainComponents/DataDeletion';
import DeletionRequest from './MainComponents/DeletionRequest';
import Home from './MainComponents/Home';
import Features from './MainComponents/Features';
import Roles from './MainComponents/Roles';
import ContactUs from './MainComponents/ContactUs';
import Download from './MainComponents/Download';
import PrivacyPolicy from './MainComponents/PrivacyPolicy';
import TermsAndConditions from './MainComponents/TermsAndConditions';
import Layout from './MainComponents/Layout';
import NotFound from './MainComponents/NotFound';
import { useEffect } from 'react';
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  }, [pathname]);

  return null;
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Layout>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/download" element={<Download />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
            <Route path="/deletion-request" element={<DeletionRequest />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;