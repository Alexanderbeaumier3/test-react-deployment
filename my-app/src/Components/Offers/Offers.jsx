import React from "react";
import './Offers.css';
import exclusive_Offer from '../Assets/exclusive_Offer.jpeg';

const Offers = () => {
    return (
        <div className='offers' style={{ backgroundImage: `url(${exclusive_Offer})` }}>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h2>Offers For You</h2>
                <button>Check It Out</button>
            </div>
            <div className='offers-right'>
                <img src={exclusive_Offer} alt="Exclusive Offers" />
            </div>        
        </div>
    );
}

export default Offers;
