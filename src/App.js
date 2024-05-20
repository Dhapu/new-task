// src/App.js
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splashScreen';
import MainApp from './components/Main'; // Your main app component
import SplashScreen1Event from './components/SplashScreen1Event';
import LandingPage from './components/LandingPage';
import LandingPageComponent from './components/LandingPageCollections';

function App() {



  return (
    <div className="App">
      {/* <SplashScreen1Event /> */}
      {/* <LandingPage /> */}
      <MainApp />
    </div>
  );
}

export default App;

