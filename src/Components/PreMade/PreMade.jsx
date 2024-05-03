import React from "react";
import  './PreMade.css';
import premade_products from "../Assets/PreMade";
import Item from "../Item/Item";

const PreMade = () => {
    return (
        <div className="premade-collections">
            <h1>Popular Pre-Made</h1>
            <hr />
            <div className="collections">
                {premade_products.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}

export default PreMade;