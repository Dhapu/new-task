import React, { useState, useEffect } from 'react';
import SplashScreen1Event from './SplashScreen1Event';
import LandingPageComponent from './LandingPageCollections';
import './Main.css'; // Import CSS for transition styles

const MainApp = () => {
  const [showLandingPage, setShowLandingPage] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the showing of LandingPageComponent after 800 milliseconds
    const timeoutId = setTimeout(() => {
      setShowLandingPage(true);
    }, 800);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <div className="main-container">
      {showLandingPage ? <LandingPageComponent /> : <SplashScreen1Event />}
    </div>
  );
};

export default MainApp;
