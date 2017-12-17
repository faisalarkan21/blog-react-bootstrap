import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { callApi, loginAuth } from './base-store';


const config = {
  key: 'root',
  storage,
  blacklist: ['location', 'form'],
};


const allReducers = persistCombineReducers(config, {
  form: formReducer,
  callApi,
  loginAuth,
});


export default allReducers;
