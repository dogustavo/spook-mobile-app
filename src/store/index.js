import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers';
import mySaga from './sagas';
import createSagaMiddleware from 'redux-saga'

let sagaMonitor = {}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });


const store = createStore(persistedReducer, applyMiddleware( sagaMiddleware ));


sagaMiddleware.run(mySaga)
export default store;
export const persistor = persistStore(store); 
