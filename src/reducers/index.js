import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { callApi, loginAuth, testApi, isLoading } from './base-store';


const allReducers = combineReducers({
  form: formReducer,
  callApi,
  loginAuth,
  testApi,
  isLoading,
});


export default allReducers;
