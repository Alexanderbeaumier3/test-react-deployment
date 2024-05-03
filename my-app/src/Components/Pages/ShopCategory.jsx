import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Item/Item";

const ShopCategory = (props) => {
    const {custom_products, PreMade} = useContext(ShopContext);
    const [sortOrder, setSortOrder] = useState('default');

    let sortedProducts = [...custom_products];

    // Filter products by category
    sortedProducts = sortedProducts.filter(item => item.category === "Customizable" || item.category === "Pre-Made");

    // Apply sorting
    if (sortOrder === 'priceHighToLow') {
        sortedProducts.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOrder === 'priceLowToHigh') {
        sortedProducts.sort((a, b) => a.new_price - b.new_price);
    }

    return (
        <div className="shop-category">
           <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-9</span> out of {sortedProducts.length} products
            </p>
            <div className="shopcategory-sort">
                Sort by 
                <select onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="priceHighToLow">Price high to low</option>
                    <option value="priceLowToHigh">Price low to high</option>
                </select>
            </div>
         </div>
        <div className="shopcategory-products">
            {sortedProducts.map((item,i) => (
                <div className="product-item" key={i}>
                    <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                </div>
            ))}
        </div>
    </div>
    );
}

export default ShopCategory;
