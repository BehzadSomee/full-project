import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import shoppingIcon from '../../assets/icons/shopping-cart.svg'

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={shoppingIcon} alt="shop icon"/></Link> 
                    <span>0</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;