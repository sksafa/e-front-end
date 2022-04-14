import React, { Fragment, useEffect } from 'react';
import {CgMouse} from "react-icons/all";
import ProductCard from "./ProductCard.js"
import MetaData from '../layout/MetaData.js';
import './Home.css';
import { getProduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader'


// const product ={
//     name: "Blue T-Shirt",
//     images: [{url:"https://i.ibb.co/DRST11n/1.webp"}],
//     price: "BDT 3000",
//     _id: "shirt"
// };

const Home = () => {

    const dispatch = useDispatch();
    const { loading,error, products   } = useSelector((state) => state.products);


    const { product} = products;

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);


    return (
        <Fragment>
            {loading ? <Loader/> : <Fragment>
                <MetaData title="Ecommerce" />
                <div className="Banner">
                    <p>Welcome to Ecommerce</p>
                    <h1>FIND AMAZING PRODUCT BELLOW</h1>
                    <a href="#container">
                        <button>Scroll <CgMouse/> </button>
                    </a>
                </div>
                <h2 className="homeHeading">Feature Products</h2>
                <div className="container" id="container">
                    {/* <Product product ={product}></Product> */}

                    {
                        product && product.map(product => (
                            <ProductCard product={product} key={product._id}></ProductCard>
                        ))
                    }
                </div>
            </Fragment>}
        </Fragment>
    );
};

export default Home;