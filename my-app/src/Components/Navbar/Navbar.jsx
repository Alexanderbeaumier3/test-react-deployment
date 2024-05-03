import React, { useContext, useRef, useState } from "react";
import './Navbar.css';

import dropDownMenu from '../Assets/dropDownMenu.png';
import logo from '../Assets/logo.webp';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from "../Context/ShopContext";

import { Link } from 'react-router-dom';



const Navbar = () => {
    
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef= useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    }

    return (
        <nav className='navbar'>  
            <div className="nav-logo">
                <img src={logo} alt="D&B Embroidery Logo" /> 
                <p>D&B EMBROIDERY</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={dropDownMenu} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop{menu === "shop" ? <hr /> : null}</Link>
                    
                </li>
                <li onClick={() => { setMenu("customizable") }}>
                    <Link style={{ textDecoration: 'none' }} to='/customizable'>Customizable{menu === "customizable" ? <hr /> : null}</Link>
                </li>
            </ul>
            <div className="nav-right">
              <Link to='/login'>
                  <button className="nav-login">Login</button>
              </Link>
              <div className="nav-cart">
                  <Link to='/cart'>
                      <img src={cart_icon} alt="Shopping Cart" />
                  </Link>
                  <div className="nav-cart-count">{getTotalCartItems()}</div>
              </div>
            </div>
        </nav>
    );
}

export default Navbar;
