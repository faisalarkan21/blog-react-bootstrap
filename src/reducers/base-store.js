import * as types from '../constants/ActionTypes';


const callApi = (state = { dataArray: [], dataObject: {} }, action) => {
  console.log(action);
  const { dataArray, dataObject } = action;
  switch (action.type) {
    case types.FETCH_API_ARRAY:
      return {
        ...state,
        dataArray,
      };
    case types.FETCH_API_OBJECT:
      return {
        ...state,
        dataObject,
      };
    case types.POST_API:
      return {
        ...state,
        dataObject,
      };
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  // console.log(action);
  switch (action.type) {
    case types.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const testApi = (state = {
  data: { message: '', database: '' },
}, action) => {
  switch (action.type) {
    case types.TEST_API:
      return {
        ...state,
        data: action.payload,
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
  isLoading,
};
