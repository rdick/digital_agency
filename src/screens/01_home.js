import React from 'react';
import "./01_home.css"

const Home = (props) => {
    return (
        <div className="home-page">
            <div className="home-banner">
                <div className="home-banner-text-container">
                    <h3> Let's Transform</h3>
                    <h2>Your Buisness</h2>
                    <h1>One Client At A Time</h1>
                </div>
                <div className="home-picture-container">
                    <img src="/home-banner.png" alt="banner-image"></img>
                </div>
            </div>

        </div>
    );
}

export default Home;


