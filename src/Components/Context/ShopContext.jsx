import React, { createContext, useState } from "react";
import custom_products from "../Assets/custom_products";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < custom_products.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart()); 
    
    
    const addToCart = (itemId) => {
        setCartItems(prev => {
            const updatedCartItems = { ...prev, [itemId]: prev[itemId] + 1 };
            return updatedCartItems;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const removeCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
            return removeCartItems;
        });
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = custom_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = {getTotalCartItems,getTotalCartAmount,custom_products,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
 );
}

export default ShopContextProvider;