import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Icons
import shoppingIcon from '../../assets/icons/shopping-cart.svg'

//Context
import { CartContext } from '../../context/CartContextProvider';

//Style
import styles from './Navbar.module.css';

const Navbar = () => {

    const{state}= useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div  className={styles.iconContainer}>
                    <Link to="/cart"><img src={shoppingIcon} alt="shop icon"/></Link> 
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;