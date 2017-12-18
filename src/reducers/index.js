import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { callApi, loginAuth } from './base-store';


const config = {
  key: 'root',
  debug: true,
  storage,
  blacklist: ['location', 'form', 'callApi'],
};


const allReducers = persistCombineReducers(config, {
  form: formReducer,
  callApi,
  loginAuth,
});


export default allReducers;
