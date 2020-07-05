import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export default store;
export const persistor = persistStore(store); 
