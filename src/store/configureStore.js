
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';


const logger = createLogger({
  logErrors: false,
});

/* eslint-disable no-underscore-dangle */
const configureStore = createStore(
  rootReducers,
  applyMiddleware(logger, thunk),

);


export default configureStore;
