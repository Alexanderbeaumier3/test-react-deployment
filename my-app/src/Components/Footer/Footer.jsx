import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.webp"; // Updated import statement

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>D&B EMBROIDERY</p>    
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;