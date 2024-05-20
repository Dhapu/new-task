import React from 'react';
import './ToggleContent.css';
import { useState } from 'react';

const ToggleContent = ({ setActiveContent }) => {
    const [activeContent, setActiveContentState] = useState('events');

    const showEvents = () => {
        setActiveContentState('events');
        setActiveContent('events');
    };

    const showCollections = () => {
        setActiveContentState('collections');
        setActiveContent('collections');
    };

    return (
        <div>
            <div className="button-group">
                <button 
                    onClick={showEvents} 
                    className={activeContent === 'events' ? 'active' : ''}
                >
                    Events
                </button>
                <button 
                    onClick={showCollections} 
                    className={activeContent === 'collections' ? 'active' : ''}
                >
                    Collections
                </button>
            </div>
        </div>
    );
};

export default ToggleContent;
