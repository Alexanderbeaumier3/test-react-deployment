import React from "react";
import './Hero.css';
import hoodie from "../Assets/hoodie.jpeg";
import fleeceThrowBlanket from "../Assets/fleeceThrowBlanket.webp";
import menShirt from "../Assets/menShirt.jpeg";
import hat from "../Assets/hat.jpeg";

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <h1 className='hero-title'>Be Your Own Brand</h1>
                <p className='hero-tagline'>Shop Customizable Products</p>
               
                <div className="hero-boxes">
                    <div className="hero-box">
                        <img src={menShirt} alt="Collection Four" />
                        <button className='hero-button'>Customize</button>
                    </div>
                    <div className="hero-box">
                        <img src={hoodie} alt="Collection One" />
                        <button className='hero-button'>Customize</button>
                    </div>
                    <div className="hero-box">
                        <img src={hat} alt="Collection Two" />
                        <button className='hero-button'>Customize</button>
                    </div>
                    <div className="hero-box">
                        <img src={fleeceThrowBlanket} alt="Collection Three" />
                        <button className='hero-button'>Customize</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
