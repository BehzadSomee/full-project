import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Icons
import shoppingIcon from '../../assets/icons/shopping-cart.svg'

//Context
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const{state}= useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={shoppingIcon} alt="shop icon"/></Link> 
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;