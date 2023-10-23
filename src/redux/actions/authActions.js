import axios from 'axios' 
import { ERRORS, SET_USER } from '../types'
import jwt_decode from 'jwt-decode'
import { setAuth } from '../../util/setAuth'
import {API_URL} from '../../config'


export const Registration = (form, navigate)=>dispatch => {
    axios.post(`${API_URL}/api/register`, form)
    .then( res => {
        navigate('/login')
        dispatch({
            type: ERRORS,
            payload: {}
        })
    })
    .catch( err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const LoginAction = (form, navigate)=>dispatch => {
    axios.post(`${API_URL}/api/login`, form)
    .then( res => {
        const {token} = res.data
        localStorage.setItem('jwt', token)
        const decode = jwt_decode(token)
        dispatch(setUser(decode))
        setAuth(token)
    })
    .catch( err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const Logout = (navigate) => dispatch => {
    localStorage.removeItem('jwt')
    navigate('/')
    dispatch({
        type: SET_USER,
        payload: {}
    })

}


export const setUser = (decode) => ({
    type: SET_USER,
    payload: decode
})