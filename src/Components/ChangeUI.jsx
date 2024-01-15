// ChangeUIComponent.js
import React, { useState } from 'react';
import './ChangeUIComponent.css';

const ChangeUIComponent = () => {
    const [showUI, setShowUI] = useState(true);

    const handleButtonClick = () => {
        setShowUI(!showUI);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-4">React UI Toggle</h1>
            <div className={`bg-gray-200 p-4 ${showUI ? 'block' : 'hidden'}`}>
                {/* Initial UI */}
                <p className="text-lg">This is the initial UI.</p>
            </div>
            <div className={`bg-blue-200 p-4 ${showUI ? 'hidden' : 'block'}`}>
                {/* Updated UI after button click */}
                <p className="text-lg">This is the updated UI.</p>
            </div>
            <button
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleButtonClick}
            >
                Toggle UI
            </button>
        </div>
    );
};

export default ChangeUIComponent;
