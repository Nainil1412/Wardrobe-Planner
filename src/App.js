import React, { useState } from 'react';
import LandingPage from './LandingPage';
import WardrobePlanner from './WardrobePlanner';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState("mehendi");

    return (
        <div className="App">
            <LandingPage onEventSelect={setActiveTab} />
            <WardrobePlanner activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}

export default App;
