import { CiLocationOn } from "react-icons/ci";
import { MdAccessAlarm } from "react-icons/md";
import "./eventComponent.css";
import RectangleComponent from "./rectangleComponent";
const EventComponent = () => {
    return (
        <div className="event-component">
       
            <span className="event-component-text">Explore Your First Event</span>
<div className="event-component-header">
    <span>Event Name</span>
</div>
            <div className="event-component-date-box">
<div className="event-component-venue">
<CiLocationOn />
    <span>Venue</span>
</div>
<div className="event-component-date">
<MdAccessAlarm />
    <span>04/3/2024 @19:00</span>
</div>
            </div>
            <div className="event-component-description">
                <span className="event-component-description-text">Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </span>

            </div>
            <div className="event-component-lineup">
                <span>Artist Lineup</span>
            </div>

            <div className="event-component-images">
<img src="./eventPageImages/artistImage1.png" alt="image1" className="art1"/>
<img src="./eventPageImages/artistImage2.png" alt="image2" className="art2"/>
<img src="./eventPageImages/artistImage3.png" alt="image3" className="art3"/>
            </div>
            <div className="event-component-scanner-button-box">
                <img src="./eventPageImages/scanner.png" alt="scanner" className="scanner" />
                <button className="event-component-button">Join Waitlist</button>
            </div>
        </div>
    );
};

export default EventComponent;