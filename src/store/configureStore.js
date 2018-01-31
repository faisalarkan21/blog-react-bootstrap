import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';


const logger = createLogger({

});

/* eslint-disable no-underscore-dangle */
const configureStore = createStore(
  rootReducers,
  applyMiddleware(thunk, logger),

);


export default configureStore;
