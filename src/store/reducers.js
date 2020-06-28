/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import { combineReducers } from 'redux';

import auth from '../ducks/auth';
import users from '../ducks/users';
import navigation from '../ducks/navigation';

const appReducer = combineReducers({
    auth,
    users,
    navigation
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
