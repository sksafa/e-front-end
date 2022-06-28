import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,

    CLEAR_ERRORS,

} from '../constants/userConstants';


//login user
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

//register  user
export const register = (userData) => async (dispatch)=>{
    try {
        dispatch({type:REGISTER_REQUEST});

        const config = {headers:{"Content-Type": "multipart/form-data"}};

        const {data } = await axios.post(`http://localhost:5000/api/v2/registration`, userData,config );
        dispatch({type: REGISTER_SUCCESS, payload:data.user});

    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload:error.response.data.message});
    }
}

//logged user
export const loadUser = () =>async (dispatch)=>{
    try {
        dispatch({type:LOAD_USER_REQUEST});

        const {data } = await axios.get( `http://localhost:5000/api/v2/me`);
        console.log("load user", data)
        dispatch({type: LOAD_USER_SUCCESS, payload:data.user});

    } catch (error) {
        dispatch({type: LOAD_USER_FAIL, payload:error.response.data.message});
    }
}

//logout
export const logoutUser = () =>async (dispatch)=>{
    try {
       await axios.get( `http://localhost:5000/api/v2/logout`);
        dispatch({type:LOGOUT_USER_SUCCESS});

    } catch (error) {
        dispatch({type: LOGOUT_USER_FAIL, payload:error.response.data.message});
    }
}


//register  user
export const updateProfile = (userData) => async (dispatch)=>{
    console.log("main datate ki pailam ? = ", userData)
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST});

        const config = {headers:{"Content-Type": "multipart/form-data"}};

        const {data } = await axios.put(`http://localhost:5000/api/v2/me/update/info`, userData,config );
        console.log("updated user data:--", data)
        dispatch({type: UPDATE_PROFILE_SUCCESS, payload:data.success});

    } catch (error) {
        dispatch({type: UPDATE_PROFILE_FAIL, payload:error.response.data.message});
    }
}


// clearing errors
export const clearErrors = () => async (dispatch) =>{
    dispatch({type:CLEAR_ERRORS});
}

