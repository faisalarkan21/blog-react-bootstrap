import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as notificationsReducer } from 'reapop';

import { callApi, loginAuth, testApi, isLoading } from './base-store';


const allReducers = combineReducers({
  form: formReducer,
  callApi,
  loginAuth,
  testApi,
  isLoading,
  notifications: notificationsReducer(),
});


export default allReducers;
