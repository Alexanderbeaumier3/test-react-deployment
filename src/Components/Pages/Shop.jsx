import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import PreMade from "../PreMade/PreMade";
import NewsLetter from "../NewsLetter.jsx/NewsLetter";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <PreMade/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;