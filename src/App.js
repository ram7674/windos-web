import React, { useState } from 'react';
import Header from './Components/Header';
import LandingSection from './Components/LandingSection';
import FeaturesSection from './Components/FeaturesSection';
import LanguageContext from './context/LanguageContext';

import './App.css';

function App() {
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const changeLanguage = (newLanguage) => {
    setActiveLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ activeLanguage, changeLanguage }} //here provider value (keys) is only single object is taken al value
    >
      <Header />
      <LandingSection />
      <FeaturesSection />
    </LanguageContext.Provider>
  );
}

export default App;
