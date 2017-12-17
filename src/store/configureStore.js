
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { REHYDRATE, PURGE, persistCombineReducers, persistStore } from 'redux-persist';


import thunk from 'redux-thunk';
import persistRootReducers from '../reducers';


const logger = createLogger({
  logErrors: true,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  persistRootReducers,
  undefined, applyMiddleware(logger, thunk),
);

persistStore(
  store, null,
  () => {
    store.getState();
  },
);

export default store;
