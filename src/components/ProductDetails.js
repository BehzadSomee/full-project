import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { useContext , useEffect } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import axios from 'axios';

//Styles
import styles from './ProductDetails.module.css';

const ProductDetails = () => {

    const [datas , setDatas] = useState({});
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        const oneFetchAPI = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setDatas(response.data);
        }
        
        oneFetchAPI();
    },[]);

    const {title , image , category, price,description} = datas;

    

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product' style={{width:"200px"}} />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products" >Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;