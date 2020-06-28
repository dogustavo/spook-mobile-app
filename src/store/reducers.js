import { combineReducers } from 'redux';

import auth from '../ducks/auth';
import navigation from '../ducks/navigation';

const appReducer = combineReducers({
    auth,
    navigation
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
