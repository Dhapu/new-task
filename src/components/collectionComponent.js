import React from 'react';
import styled from 'styled-components';

const CollectionComponentContainer = styled.div`
position: absolute;
top: 0;
right: 0;
width: 80%;
z-index: 10;
background-color: rgba(0, 0, 0, 0.7);
color: white;
padding: 20px;
box-sizing: border-box;


    .collection-component-text {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 40px;
        color: white; /* Text color */
    }
    .collection-component-header {
        font-family: Lexend;
        font-size: 57px;
        font-weight: 700;
        line-height: 71.25px;
        text-align: left;
        
        margin-bottom: 20px;
        color: white; /* Text color */
    }
    .collection-component-description {
        font-size: 16px;
        margin-bottom: 20px;
        color: white; /* Text color */
    }
    .collection-component-images-box {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .collection-component-images {
        display: flex;
        gap: -15px; /* Negative gap to make images overlap */
    }
    .imgPic1, .imgPic2, .imgPic3, .imgPic4, .imgPic5 {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #fff; /* Optional: border to make overlapping more visible */
    }
    .collection-component-images-text {
        margin-left: 10px;
        font-size: 14px;
        color: white; /* Text color */
    }
    .collection-component-card-text {
        font-size: 18px;
        margin-bottom: 10px;
        color: white; /* Text color */
    }
    .collection-component-card-box {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }
    .imgCard, .imgCard1, .imgCard2 {
        width: 100px;
        height: 150px;
    }
    .collection-component-button {
        position: absolute;
        bottom: -50px;
        right: 10px;
        
        .event-component-button {
            padding: 10px 20px;
            background-color: #FFCA5F; /* Updated button color */
            color: white; /* Button text color */
            border: none;
            cursor: pointer;
            border-radius: 40px; /* Updated border radius */
            font-size: 16px; /* Updated font size */
            gap: 10px; /* Updated gap */
            opacity: 1; /* Updated opacity */
        }
    }
`;

const CollectionComponent = () => {
    return (
        <CollectionComponentContainer>
            <span className="collection-component-text">Explore Your First Collectible</span>
            <div className="collection-component-header">
                <span>Meta Lives</span>
            </div>
            <div className="collection-component-description">
                <span className="collection-component-description-header">Live in Astrix</span>
                <span className="collection-component-description-text">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</span>
            </div>
            <div className="collection-component-images-box">
                <div className="collection-component-images">
                    <img src="./collectionImages/imgProfile1.png" alt="image1" className="imgPic1"/>
                    <img src="./collectionImages/imgProfile2.png" alt="image2" className="imgPic2"/>
                    <img src="./collectionImages/imgProfile3.png" alt="image3" className="imgPic3"/>
                    <img src="./collectionImages/imgProfile4.png" alt="image4" className="imgPic4"/>
                    <img src="./collectionImages/imgProfile5.png" alt="image5" className="imgPic5"/>
                </div>
                <span className="collection-component-images-text">22k people interested</span>
            </div>
            <div className="collection-component-card-text">
                <span>Collectibles</span>
            </div>
            <div className="collection-component-card-box">
                <img src="./collectionImages/imgCard.png" alt="image1" className="imgCard"/>
                <img src="./collectionImages/imgCard.png" alt="image2" className="imgCard1"/>
                <img src="./collectionImages/imgCards.png" alt="image3" className="imgCard2"/>
            </div>
            <div className="collection-component-button">
                <button className="event-component-button">Join Waitlist</button>
            </div>
        </CollectionComponentContainer>
    );
};

export default CollectionComponent;
