import React, { Fragment, useEffect, useState } from 'react';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import Loader from '../layout/Loader/Loader';
// import { useAlert } from 'react-alert';
import "./Products.css"
import ProductCard from '../Home/ProductCard';
import MetaData from '../layout/MetaData';
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import { Slider } from '@material-ui/core';




const categories = ['electronics','personal','men', 'women','sports' ];


const Products = () => {
    // const alert = useAlert()

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([0, 2500])
    const [category, setCategory] = useState("")

    const dispatch = useDispatch();
    const { loading,productsCount, resultPerPage, error, products } = useSelector((state) => state.products);
    const { keyword } = useParams();
  
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    }

    useEffect(() => {
        // if(error){
        //     alert.error(error)
        //     dispatch(clearErrors());
        // }
        dispatch(getProduct(keyword, currentPage, category));
    }, [dispatch, keyword, currentPage, category]);

    return (
        <Fragment>
            {loading ? <Loader /> : <Fragment>
                <MetaData title="Products --Ecommerce" />

                <h2 className="productsHeading">All Products</h2>
                <div className="products" id="container">
                    {
                        products && products.map(product => (
                            <ProductCard product={product} key={product._id}></ProductCard>
                        ))
                    }
                </div>
                <div className="filterBox">
                    <Typography>Price</Typography>
                    <Slider
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={2500}
                    />

                    <Typography>Categories</Typography>
                    <ul className="categoryBox">
                        {categories.map((category) => (
                            <li
                                className="category-link"
                                key={category}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {resultPerPage < productsCount && <div className="paginationBox">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Prev"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                    />
                </div>}
            </Fragment>}
        </Fragment>
    );
};

export default Products; 