import React from 'react';
import './SplashScreen1Event.css';

const SplashScreen1Event = ({ onClick }) => { // Destructuring onClick from props
    return (
        <div className="splash-screen1-event-container" onClick={onClick}>
            <div className="splash-screen1-event-logo">
                <img className="logoimg" src="./images/logoimage.png" alt="Logo" />
                <span className="splash-screen1-event-logo-text">Astrix.</span>
            </div>
            <div className="imagees-container">
                <div className="splash-screen1-event-group-container">
                    <span className='img1-box'>
                        <span> WE</span>
                        <img className="img1" src='./images/image1.png' alt='img1'/> 
                        <span>ORGANIZE THE</span> 
                    </span>
                    <span className="img2-box">
                        <span>CONNECTION</span>
                        <img className="img2" src='./images/image2.png' alt='img2'/>
                    </span>
                    <span className="img3-box">
                        <img className="img3" src='./images/image3.png' alt='img3'/>
                        <span>BETWEEN </span>
                        <img className="img4" src='./images/image4.png' alt='img4'/> 
                        <span>MUSIC</span> 
                    </span>
                    <span className="img5-box">
                        <span>ARTIST</span>
                        <img className="img5" src='./images/image5.png' alt='img5'/> 
                        <span> CULTURE</span>
                        <img className="img6" src='./images/image6.png' alt='img6'/> 
                    </span>
                    <span className="img7-and-text">
                        <img className="img7" src='./images/image7.png' alt='img7'/>
                        <span>ART</span> 
                        <img className="img8" src='./images/image8.png' alt='img8'/>
                        <span> & COLLECTIONS</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen1Event;
