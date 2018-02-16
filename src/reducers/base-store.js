import * as types from '../constants/ActionTypes';


const initApi = {
  users: [],
  user: {},
  status: null,
  homeData: {
    resultLastLogin: [],
    resultStatUsers: {},
  },
};

const callApi = (state = initApi, action) => {
  // console.log(action);
  switch (action.type) {
    case types.FETCH_GET_USERS:
      return {
        ...state,
        users: action.users,
        status: action.status,
      };
    case types.FETCH_GET_USER:
      return {
        ...state,
        user: action.user,
        status: action.status,
      };
    case types.FETCH_GET_HOME_DATA:
      return {
        ...state,
        homeData: action.homeData,
        status: action.status,
      };
    case types.POST_API:
      return {
        ...state,
        status: action.status,
        user: action.user,
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

const fetchError = (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case types.FETCH_ERROR:
      return action.errorCode;
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
  fetchError,
};
