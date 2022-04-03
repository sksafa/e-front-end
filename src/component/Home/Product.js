import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"

const options = {
    edit: false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth <600 ?20 : 25,
    value:2.5,
    isHalf:true

}


const Product = ({ product }) => {
    console.log("card product", product)
    const imgPic = product.image[0];
    console.log(imgPic);
    return (
        <Link className="productCard" to={product._id}>
            <img src={imgPic.url} alt={product.name} />
            <p>{product.price}</p>
            <div>
                <ReactStars {...options} /><span>(256 reviews)</span>
            </div>
            <span>{product.price}</span>
        </Link>
    );
};

export default Product;