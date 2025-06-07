// store.js
import { createStore } from 'redux';
import sightingsReducer from './sightingsReducer';

const store = createStore(
  sightingsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
