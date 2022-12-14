import React, { useContext } from "react";
import {Link} from "react-router-dom";

//Context
import { CartContext } from "../context/CartContextProvider";
//Components
import Cart from "./shared/Cart";

//Styles
import styles from './ShopCart.module.css';

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {
        state.itemsCounter > 0 &&
        <div className={styles.payments}>
            <p><span>total items:</span> {state.itemsCounter}</p>
            <p><span>total payments:</span> {state.total} $</p>
            <div className={styles.buttonContainer}>
                <button className={styles.clear} onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                <button className={styles.checkout} onClick={()=>dispatch({type:"CHECKOUT"})}>Chekout</button>
            </div>
        </div>
      }

      {
        state.checkout &&
        <div className={styles.complete}>
            <h3>Checked Out Successfully</h3>
            <Link to={'/products'}>Buy More</Link>
        </div>
      }

      {
        !state.checkout && state.itemsCounter === 0 &&
        <div className={styles.complete}>
            <h3>Want To Buy?</h3>
            <Link to={'/products'}>Go To Shop</Link>
        </div>
      }
    </div>
  );
};

export default ShopCart;
