import React from 'react';

import Routes from './routes';
import store, { persistor } from './store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes/>
            </PersistGate>
        </Provider>
    )
}

export default App