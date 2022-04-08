import React, { useEffect } from 'react';
import { getSingleProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getSingleProduct(id))
    },[dispatch,id])

    const {product, error , loading} = useSelector((state)=> state.productDetails)
console.log("single product" , product)
    const imageLink = product.image[0];
    return (
        <div>
            <p>this sis product details</p>
            <p>{imageLink.url}</p>
        </div>
    );
};

export default ProductDetails;

