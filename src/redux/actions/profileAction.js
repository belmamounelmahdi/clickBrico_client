import axios from 'axios'
import {API_URL} from '../../config'
import { DELETE_PROFILE, ERRORS, SET_PROFILE, SET_PROFILES } from '../types'



export const AddProfile = (form, setShow, setMessage) => dispatch => {
    axios.post(`${API_URL}/api/profiles`, form)
    .then( res => {
        setShow(true)
        setMessage("Profil modifié avec succès")
        dispatch({
            type: ERRORS,
            payload: {}
        })
        setTimeout(() => {
            setShow(false)
        }, 4000)
    })
    .catch( err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const GetProfile = () => dispatch => {
    axios
    .get(`${API_URL}/api/profile`)
    .then( res => {
        dispatch({
            type: SET_PROFILE,
            payload: res.data
        })
    })
    .catch( err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}


export const GetProfiles = () => dispatch => {
    axios
    .get(`${API_URL}/api/profiles`)
    .then( res => {
        dispatch({
            type: SET_PROFILES,
            payload: res.data
        })
    })
    .catch( err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const DeleteProfile = (id) => dispatch => {
    if (window.confirm('Vous voulez supprimer cette utilisateur ?' )) {
        axios
    .delete(`${API_URL}/api/profile/${id}`)
    .then( res => {
        dispatch({
            type: DELETE_PROFILE,
            payload: id
        })
    })
    .catch( err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
    }
}