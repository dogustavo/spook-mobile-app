/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/**
 * 
 * Actions Types
 * 
 */

import * as UserService from '../services/user'

export const Types = {
  USER: 'users/USER',
  ADD_USER: 'users/ADD_USER' 
};
/**
* 
* reducers
* 
*/

const initialState = {
  user: {
    _id: null,
    likes: [],
    dislikes: [],
    name: null,
    email: null,
    data_nascimento: null,
    avatar: null
  },
  error: '',
  loading: true
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
      case Types.USER:
          return {
              ...state,
              user: payload,
          };
        case Types.ADD_USER: {
          return {
            ...state,
            error: false,
            loading: true
          }
        }
      default:
          return state;
  }
}

/***
* 
* Actions Creators
*/

export const createUser = data => ({ type: Types.USER, payload: data }); 

export const saveUser = data => async dispatch => {
  try {
    const response = await UserService.createUser(data)
    dispatch(createUser(response))
    alert(JSON.stringify(response, null, 2))
  } catch (error) {
    alert(error.message)
  }
}
