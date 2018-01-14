import * as ActionType from '../actions';


const callApi = (state = '', action) => {
  switch (action.type) {
    case ActionType.TEST_API:
      return {
        ...state,
        codeResponse: `Code response : ${action.payload.status}`,
        message: action.payload.data.message,
        database: action.payload.data.database,
      };
    case ActionType.CREATE_USER_API:
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
    case ActionType.LOGIN_USER_API:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
      };
    case ActionType.LOGOUT_USER:
      return {
        ...state,
        isLoginAuthenticated: action.payload.isLoginAuthenticated,
        location: action.payload.location,
      };
    case ActionType.CHECK_AUTH:
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
