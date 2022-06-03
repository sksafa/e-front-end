import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,

} from '../constants/userConstants';

export const login = (email,password) =>async (dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST});

        const config = {headers:{"content-type": "application/json"}};

        const {data } = await axios.post(
            `http://localhost:5000/api/v2/login`,
            {email, password},
            config
        );
        dispatch({type: LOGIN_SUCCESS, payload:data.user});

    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload:error.response.data.message});
    }
}

export const register = (userData) => async (dispatch)=>{
    try {
        dispatch({type:REGISTER_REQUEST});

        const config = {headers:{"content-type": "multipart/form-data"}};

        const {data } = await axios.post(`http://localhost:5000/api/v2/registration`, userData,config );
        dispatch({type: REGISTER_SUCCESS, payload:data.user});

    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload:error.response.data.message});
    }
}






// clearing errors
export const clearErrors = () => async (dispatch) =>{
    dispatch({type:CLEAR_ERRORS});
}

