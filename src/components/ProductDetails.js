import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { useContext , useEffect } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import axios from 'axios';

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
        <div>
            <img src={image} alt='product' style={{width:"200px"}} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category: </span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <br/>
                    <Link to="/products" >Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;