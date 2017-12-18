
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { REHYDRATE, PURGE, persistCombineReducers, persistStore } from 'redux-persist';


import thunk from 'redux-thunk';
import persistRootReducers from '../reducers';

const logger = createLogger({
  logErrors: true,
});


const middleWares = [thunk, logger];


const configureStore = () => {
  const store = createStore(persistRootReducers, applyMiddleware(...middleWares));
  const persistor = persistStore(store);

  return { persistor, store };
};


export default configureStore;
