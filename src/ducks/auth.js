/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/**
 * 
 * Actions Types
 * 
 */

export const Types = {
    AUTH_LOGIN: 'auth/AUTH_LOGIN',
    AUTH_LOGOUT: 'auth/AUTH_LOGOUT',
    AUTH_USER: 'auth/AUTH_USER',
};

/**
 * 
 * reducers
 * 
 */

const initialState = {
    token: null,
    isAuth: null,
    user: ''
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case Types.AUTH_LOGIN:
            return {
                ...state,
                token: payload,
                isAuth: true
            };
        case Types.AUTH_LOGOUT: 
            return {
                ...state,
                token: null,
                isAuth: false
            };
        case Types.AUTH_USER:
            return {
                ...state,
                user: payload
            };
    
        default:
            return state;
    }
}

/***
 * 
 * Actions Creators
 */

export const authLogin  = token => ({ type: Types.AUTH_LOGIN, payload: token });
export const authLogout = () => ({ type: Types.LOGOUT });
