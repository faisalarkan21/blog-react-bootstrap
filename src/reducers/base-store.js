import * as types from '../constants/ActionTypes';


const initCallApi = {

};


const callApi = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case types.FETCH_API:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const testApi = (state = {
  message: '',
  database: '',
}, action) => {
  switch (action.type) {
    case types.TEST_API:
      return {
        ...state,
        message: action.payload.message,
        database: action.payload.database,
      };
    default:
      return state;
  }
};

const loginAuth = (state = {
  isLoginAuthenticated: false,
  dataToken: '',
  location: '',
}, action) => {
  // console.log(action);
  switch (action.type) {
    case types.LOGIN_USER_API:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
      };
    case types.CHECK_AUTH:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        dataToken: action.payload.dataToken,
      };
    default:
      return state;
  }
};

export {
  callApi,
  loginAuth,
  testApi,
};
