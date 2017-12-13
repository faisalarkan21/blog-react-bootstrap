import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { callApi } from './base-store';


const allReducers = combineReducers({
  form: formReducer,
  callApi,

});

export default allReducers;
