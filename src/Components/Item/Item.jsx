import React, { useContext, useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Item = (props) => {
    const { addToCart } = useContext(ShopContext);
    const [isAdded, setIsAdded] = useState(false); // state to track if item is added

    const handleAddToCart = () => {
        addToCart(props.id);
        setIsAdded(true); // set state to true when item is added

        // revert back to "Add to Cart" after 1 second
        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
    }

    return (
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
            </div>
                <button onClick={handleAddToCart}>
                    {isAdded ? "Item Added to Cart" : "Add to Cart"} {/* Change button text based on isAdded state */}
                </button>
        </div>
    );
}

export default Item;
