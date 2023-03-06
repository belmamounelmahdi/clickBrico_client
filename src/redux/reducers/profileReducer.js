/* eslint-disable import/no-anonymous-default-export */
import { DELETE_PROFILE, SET_PROFILE, SET_PROFILES } from '../types'

const initialState = {
    profiles: [],
    profile: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE:
            
            return {
                ...state,
                profile: action.payload
            }
        case SET_PROFILES:
            
            return {
                ...state,
                profiles: action.payload
            }
        case DELETE_PROFILE:
            
            return {
                ...state,
                profiles: state.profiles.filter( p => p._id !== action.payload )
            } 
    
        default:
            return state;
    }
}