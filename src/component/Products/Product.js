
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleClick,product}= props;
    const {name, img, seller, price, ratings} =product;
   
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>Proce : $ {price}</p>
           <p><small>Seller : {seller}</small></p>
           <p><small>Reting : {ratings}</small></p>
           </div>
           <button onClick={()=> handleClick(product)} className='btn-cart'><p>Add to Cart</p>
           <FontAwesomeIcon icon={faShoppingCart} />
           </button>
        </div>
    );
};

export default Product;