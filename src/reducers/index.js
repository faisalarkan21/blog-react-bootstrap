import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { callApi, loginAuth } from './base-store';


const allReducers = combineReducers({
  form: formReducer,
  callApi,
  loginAuth,
});

export default allReducers;
