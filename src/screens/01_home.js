import React from 'react';
import "./01_home.css"

const Home = (props) => {
    return (
        <div className="home-page">
            <div className="home-page1">
                <div className="home-banner1">
                    <div className="home-banner-text-container">
                        <h3> Let's Transform</h3>
                        <h2>Your Buisness</h2>
                        <h1>One Client At A Time</h1>
                        <button><h4>Find Out More -></h4></button>
                    </div>
                    <div className="home-picture-container">
                        <img src="/home-banner.png" alt="banner-image"></img>

                    </div>
                </div>
                <div className="home-banner2">
                    <div className="companies-heading">
                        <h3>Some of Our Clients</h3>
                    </div>
                    <div className="companies-icons">

                    </div>
                </div>
            </div>

            <div className="about-banner">

            </div>

        </div>
    );
}

export default Home;


