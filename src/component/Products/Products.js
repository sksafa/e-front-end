import React, { Fragment, useEffect,useState } from 'react';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import "./Products.css"
import ProductCard from '../Home/ProductCard';
import MetaData from '../layout/MetaData';
import Pagination from "react-js-pagination";

const Products = () => {

    const [currentPage , setCurrentPage] = useState(1)

    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
    const { keyword } = useParams();
    const { product, productsCount, resultPerPage } = products;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
      };
          

    useEffect(() => {
        dispatch(getProduct(keyword,currentPage));
    }, [dispatch , keyword, currentPage]);




    return (
        <Fragment>
        {loading ? <Loader/> : <Fragment>
            <MetaData title="Ecommerce/Product" />

            <h2 className="productsHeading">All Products</h2>
            <div className="products" id="container">
                {
                    product && product.map(product => (
                        <ProductCard product={product} key={product._id}></ProductCard>
                    ))
                }
            </div>
            <div className="paginationBox">
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
            </div>
        </Fragment>}
    </Fragment>
    );
};

export default Products;<h2>Hello product</h2>