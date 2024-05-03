import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers To Your Email</h1>
            <p>Subscribe to our newsletter and stay up to date</p>
            <div className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;