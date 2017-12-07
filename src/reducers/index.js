import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { showAlert } from './base';


const allReducers = combineReducers({
  form: formReducer,
  showAlert,

});

export default allReducers;
