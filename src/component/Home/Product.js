import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
import ReviewCard from '../productDetails/ReviewCard';


const Product = ({ product }) => {
    const options = {
        edit: false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth <600 ?20 : 25,
        value: 4,
        isHalf:true,
    
    }

    
    const imgPic = product.image[0];
    console.log(imgPic);
    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={imgPic.url} alt={product.name} />
            <p>{product.price}</p>
            <div>
                <ReactStars {...options} /><span>({product.numOfReviews} reviews)</span>
            </div>
            <span>{`$${product.price}`}</span>
        </Link>
    );
};

export default Product;