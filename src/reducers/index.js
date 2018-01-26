import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { callApi, loginAuth, testApi } from './base-store';


const allReducers = combineReducers({
  form: formReducer,
  callApi,
  loginAuth,
  testApi,
});


export default allReducers;
