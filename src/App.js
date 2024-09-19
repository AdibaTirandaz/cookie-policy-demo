import React, { useState } from 'react';
import './App.css';
import CookiePolicy from './CookiePolicy';
import CustomizeCookiesPopup from './CustomizeCookiesPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import PrivacyPolicyPDF from './PrivacyPolicyPDF'; // English PDF
import PrivacyPolicyPDFHindi from './PrivacyPolicyPDFHindi'; // Hindi PDF
import LanguageSelection from './LanguageSelection'; // Import Language Selection Component
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './FormPage'; // Import Form Page

function App() {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showPDFPopup, setShowPDFPopup] = useState(false); // State for English PDF popup
  const [showPDFPopupHindi, setShowPDFPopupHindi] = useState(false); // State for Hindi PDF popup
  const [showLanguagePopup, setShowLanguagePopup] = useState(false); // State for Language Popup

  // Open Customize Cookie Popup
  const handleSettings = () => {
    setShowCookieBanner(false);
    setShowCustomizePopup(true);
  };

  // Close any open popups
  const handleClosePopup = () => {
    setShowCustomizePopup(false);
    setShowPrivacyPopup(false);
    setShowPDFPopup(false); // Close PDF popup (English)
    setShowPDFPopupHindi(false); // Close PDF popup (Hindi)
    setShowLanguagePopup(false); // Close Language popup
  };

  // Open the Privacy Policy popup instead of the Cookie Policy
  const openPrivacyPolicyPopup = () => {
    setShowCookieBanner(false); // Close the cookie banner
    setShowPrivacyPopup(true); // Open the Privacy Policy Popup
  };

  // Open the Language Selection Popup
  const openLanguagePopup = () => {
    setShowLanguagePopup(true); // Open the Language popup
  };

  // Open the English PDF popup
  const openPrivacyPolicyPDF = () => {
    setShowLanguagePopup(false); // Close the language selection popup
    setShowPDFPopup(true); // Open the English PDF popup
  };

  // Open the Hindi PDF popup
  const openPrivacyPolicyPDFHindi = () => {
    setShowLanguagePopup(false); // Close the language selection popup
    setShowPDFPopupHindi(true); // Open the Hindi PDF popup
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the /form route */}
          <Route path="/form" element={<FormPage />} />
          
          {/* Define the default route */}
          <Route 
            path="/" 
            element={
              <div className="background-container">
                {showCookieBanner && (
                  <CookiePolicy
                    handleSettings={handleSettings}
                    handleOpenPrivacyPolicy={openPrivacyPolicyPopup} // Opens the PrivacyPolicyPopup on clicking Cookie Policy
                  />
                )}
                {showPrivacyPopup && (
                  <PrivacyPolicyPopup 
                    onClose={handleClosePopup} 
                    onAdjustCookies={handleSettings} 
                  />
                )}
                {showCustomizePopup && (
                  <CustomizeCookiesPopup
                    onClose={handleClosePopup}
                    handleOpenPrivacyPolicy={openPrivacyPolicyPopup} // Open PrivacyPolicyPopup here
                  />
                )}
                {/* English PDF Popup */}
                {showPDFPopup && (
                  <PrivacyPolicyPDF onClose={handleClosePopup} />
                )}
                {/* Hindi PDF Popup */}
                {showPDFPopupHindi && (
                  <PrivacyPolicyPDFHindi onClose={handleClosePopup} />
                )}
                {/* Language Selection Popup */}
                {showLanguagePopup && (
                  <LanguageSelection
                    onClose={handleClosePopup}
                    openPrivacyPolicyPDF={openPrivacyPolicyPDF} // Pass English PDF opening function
                    openPrivacyPolicyPDFHindi={openPrivacyPolicyPDFHindi} // Pass Hindi PDF opening function
                  />
                )}
                <div className="navbar">
                  <button className="privacy-button" onClick={openLanguagePopup}>
                    Privacy Policy
                  </button>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
