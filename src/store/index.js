import { createStore } from 'redux';

import redcers from './reducers';

const store = createStore(redcers);

export default store