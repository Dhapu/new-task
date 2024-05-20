import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import RectangleComponent from "./rectangleComponent";
import ToggleContent from "./toggleLandingPage";
import EventComponent from "./eventComponent";
import AstrixComponent from "./AstrixComponent";
import CollectionComponent from "./collectionComponent";
import CollectionImages from "./collectionImages";

const LandingPageComponent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeContent, setActiveContent] = useState('events'); // Manage active content state

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
                            <span className="events-text">
                                {activeContent === 'events' ? 'EVENTS' : 'COLLECTIBLE'}
                            </span>
                        </span>
                    </div>
                    <div className="splash-images-container">
                        {
                            activeContent === 'events' ? (
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
                            ) : (
                                <div className="image-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                            <div className="image-box">
                                <img src="./collectionImages/img1New.png" alt="image1" className="image"/>
                            </div>
                            <div className="image-box">
                            <img src="./collectionImages/img2New.png" alt="image1" className="image"/>
                            </div>
                            <div className="image-box">
                            <img src="./collectionImages/img3New.png" alt="image1" className="image"/>
                            </div>
                            <div className="image-box">
                            <img src="./collectionImages/img4New.png" alt="image1" className="image"/>
                            </div>
                        </div>
                            )
                        }
                    </div>
                    <div className="toggle-content">
                        <ToggleContent setActiveContent={setActiveContent} />
                    </div>
                </div>
                <div className="right-content">
                    <RectangleComponent />
                    {activeContent === 'events' ? <EventComponent /> : <CollectionComponent />}
                </div>
            </div>
        </div>
    );
};

export default LandingPageComponent;
