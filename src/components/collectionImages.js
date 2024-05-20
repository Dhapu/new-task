

const CollectionImages = (currentImageIndex) => {
    return (
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
    );
};


export default CollectionImages;