import React, { Fragment, useEffect } from 'react';
// import {CgMouse} from "react-icons/all";
import Product from "./Product.js"
import MetaData from '../layout/MetaData.js';
import './Home.css';
import { getProduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from 'react-redux';


// const product ={
//     name: "Blue T-Shirt",
//     images: [{url:"https://i.ibb.co/DRST11n/1.webp"}],
//     price: "BDT 3000",
//     _id: "shirt"
// };

const Home = () => {

    const dispatch = useDispatch();
    const {loading, error, products, productsCount} = useSelector((state) => state.products );
    console.log("loaded product",products)
    
    const {product} = products;

    console.log("this si product", product)


    useEffect(()=>{
        dispatch(getProduct());
    },[dispatch]);

   
    return (
       <Fragment>
           <MetaData title="Ecommerce"/>
           <div className="Banner">
               <p>Welcome to Ecommerce</p>
               <h1>FIND AMAZING PRODUCT BELLOW</h1>
               <a href="#container">
                   <button>Scroll </button>
               </a>
           </div>
           <h2 className="homeHeading">Feature Products</h2>
           <div className="container" id="container">
               {/* <Product product ={product}></Product> */}

              {
                  product && product.map(product =>(
                    <Product product ={product}></Product>
                  ))
              }
           </div>
       </Fragment> 
    );
};

export default Home;