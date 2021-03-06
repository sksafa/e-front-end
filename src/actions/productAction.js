import axios from "axios";
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,

    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,

    CLEAR_ERRORS,
} from '../constants/productConstants';

export const getProduct = (keyword = "", currentPage=1, category) => async (dispatch) =>{
    try{


        dispatch({type:ALL_PRODUCT_REQUEST});
        let link = `http://localhost:5000/api/v2/products?keyword=${keyword}&page=${currentPage}`;
        if (category) {
            link = `http://localhost:5000/api/v2/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
          }
        const {data} = await axios.get(link);
        console.log("data:",data)

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload:data,
        })
    } catch(error){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload : error.response.data.message,
        })
    }
}

export const getSingleProduct = (id) => async (dispatch) =>{
    try{
        dispatch({type:SINGLE_PRODUCT_REQUEST});
        const {data} = await axios.get(`http://localhost:5000/api/v2/product/${id}`);
        console.log("single product data ",data)

        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload:data.product,
        })
    } catch(error){
        dispatch({
            type:SINGLE_PRODUCT_FAIL,
            payload : error.response.data.message,
        })
    }
}

// clearing errors
export const clearErrors = () => async (dispatch) =>{
    dispatch({type:CLEAR_ERRORS});
}