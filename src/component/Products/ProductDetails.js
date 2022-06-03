import React, { Fragment, useEffect } from 'react';
import { clearErrors, getSingleProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from './ReviewCard.js';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import './productDetails.css'
import MetaData from '../layout/MetaData';



const ProductDetails = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    // const alert = useAlert();

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch, id])

    const { product, error, loading } = useSelector((state) => state.productDetails)
    const images = product.image;
    const { reviews } = product

    console.log("single product", product)
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 4,
        isHalf: true
    }
    
    return (

        <Fragment> {loading ? <Loader></Loader> : <Fragment>
             <MetaData title={`${product.name}--Ecommerce`} />

            <div className="productDetails">
                <div>
                    <Carousel>
                        {
                            images && images.map((image, i) =>
                                <img
                                    className="CarouselImage"
                                    key={image.url}
                                    src={image.url}
                                    alt={`${i}slide`}
                                />
                            )
                        }
                    </Carousel>
                </div>

                <div>
                    <div className="detailsBlock-1">
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                    </div>
                    <div className="detailsBlock-2">
                        <ReactStars {...options} />
                        <span>({product.numberOfReview} Reviews)</span>
                    </div>

                    <div className="detailsBlock-3">
                        <h1>{`$${product.price}`}</h1>
                        <div className="detailsBlock-3-1">
                            <div className="detailsBlock-3-1-1">
                                <button>-</button>
                                <input value="1" type="number" />
                                <button>+</button>
                            </div>{" "}
                            <button>Add to Cart</button>
                        </div>
                        <p>
                            Status:{" "}
                            <b
                                className={product.stock < 1 ? "redColor" : "greenColor"}
                            >
                                {product.stock < 1 ? "Out Of Stock" : "InStock"}
                            </b>
                        </p>
                    </div>
                    <div className="detailsBlock-4">
                        Description : <p>{product.description}</p>
                    </div>
                    <button className="submitReview">Submit Review</button>
                </div>
            </div>

            <h3 className="reviewsHeading">Reviews</h3>

            {reviews && reviews[0] ? (
                <div className="reviews">
                    {reviews &&
                        reviews.map((review) => (
                            <ReviewCard key={review._id} review={review} />
                        ))}
                </div>
            ) : (
                <p className="noReviews">No Reviews Yet</p>
            )}

        </Fragment>}</Fragment>
    );
};

export default ProductDetails;

