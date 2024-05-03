import React from "react";
import './ProductDisplay.css';
import star from '../Assets/star.png';
import starDull from '../Assets/starDull.png';

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
              <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
                <div className="productdisplay-img-main">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={starDull} alt="" />
                    <p>(153)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-size-list">
                            <p>XS</p>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                        </div>
                    </div>
                    <button>Add to Cart</button>
                </div>
            </div>    
        </div>
    );
}

export default ProductDisplay;