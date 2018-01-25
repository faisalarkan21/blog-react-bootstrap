import * as types from '../constants/ActionTypes';


const callApi = (state = '', action) => {
  switch (action.type) {
    case types.TEST_API:
      return {
        ...state,
        codeResponse: `Code response : ${action.payload.status}`,
        message: action.payload.data.message,
        database: action.payload.data.database,
      };
    case types.CREATE_USER_API:
      return {
        ...state,
        res: action.payload,

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
};
