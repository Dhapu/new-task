import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import RectangleComponent from "./rectangleComponent";
import ToggleContent from "./toggleLandingPage";
import EventComponent from "./eventComponent";
import AstrixComponent from "./AstrixComponent";

const LandingPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const numberOfImages = 4; // Total number of images
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % numberOfImages);
        }, 2800);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="landing-page-container">
            <div className="content-wrapper">
                <div className="left-content">
                    <div className="astrix-component"><AstrixComponent /></div>
                    <div className="landing-page-header">
                        <span className="landing-page-text-header">
                            <span className="astrix1-text">ASTRIX</span>
                            <span className="events-text">EVENTS</span>
                        </span>
                    </div>
                    <div className="splash-images-container">
                        <div className="image-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                            <div className="image-box">
                                <img src="./eventPageImages/images1.png" alt="image1" className="image"/>
                            </div>
                            <div className="image-box">
                                <img src="./eventPageImages/imageCamera.png" alt="image2" className="image"/>
                            </div>
                            <div className="image-box">
                                <img src="./eventPageImages/imagecoffe.png" alt="image3" className="image"/>
                            </div>
                            <div className="image-box">
                                <img src="./eventPageImages/imageGirl.png" alt="image4" className="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="toggle-content">
                        <ToggleContent/>
                    </div>
                </div>
                <div className="right-content">
                    <RectangleComponent />
                    <EventComponent />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
