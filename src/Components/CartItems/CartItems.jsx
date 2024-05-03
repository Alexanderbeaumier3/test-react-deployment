import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CartItems.css";
import remove from "../Assets/remove.png";

const CartItems = () => {
    const { getTotalCartAmount, custom_products, cartItems, removeFromCart } = useContext(ShopContext);
    
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {custom_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div className="cartitems-format" key={e.id}>
                            <img src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove} alt="" onClick={() => { removeFromCart(e.id) }} />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div className="cartitems-total-item">
                      <p>Subtotal</p>  
                      <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default CartItems;

