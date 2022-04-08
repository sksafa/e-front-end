import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,

    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,
    CLEAR_ERRORS,
} from '../constants/productConstants';


export const productReducer = ( state = { products:[] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading:true,
                products:[]
            }
        case ALL_PRODUCT_SUCCESS:
            console.log("ALL_PRODUCT_SUCCESS",action.payload.products)
            return {
                loading: false,
                products:action.payload,
                productsCount: action.payload.productsCount,
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading:false,
                error: action.payload,
            }
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                }
        default:
            return state;
    }
};


export const productDetailsReducer = ( state = { product:{} }, action) => {
    switch (action.type) {
        case SINGLE_PRODUCT_REQUEST:
            return {
                loading:true,
               ...state,
            }
        case SINGLE_PRODUCT_SUCCESS:
           
            return {
                loading: false,
                products:action.payload,
            }
        case SINGLE_PRODUCT_FAIL:
            return {
                loading:false,
                error: action.payload,
            }
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                }
        default:
            return state;
    }
};