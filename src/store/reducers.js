import { combineReducers } from 'redux';

import auth from '../ducks/auth';

const appReducer = combineReducers({
    auth,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
