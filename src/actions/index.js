import { SubmissionError } from 'redux-form';
// import Cookies from 'js-cookie';
import { tokenAuth } from '../middleware/auth-cookies';
import * as api from '../middleware/api';
import * as types from '../constants/ActionTypes';


/**
 *  Test API
 * @param {*} value response api
 */

const testApi = value => ({
  type: types.TEST_API,
  payload: value,
});

export const loadTestApi = endpoint => async (dispatch) => {
  const res = await api.fetchApi(endpoint);

  if (res.errorCode === 500) {
    return dispatch(testApi({ data: { message: null, database: null } }));
  }
  return dispatch(testApi(res.data));
};


/**
 *  Loading action
 * @param {*} bool loading parameter true or false
 *
 */

export const loadIsLoading = bool => ({
  type: types.IS_LOADING,
  payload: bool,
});

/**
 *  Fetch API
 * @param {*} value response api
 *
 */


const fetchApi = value => ({
  type: types.FETCH_API,
  payload: value,
});

export const loadFetchApi = endpoint => async (dispatch) => {
  const res = await api.fetchApi(endpoint);
  console.log(res);
  dispatch(loadIsLoading(true));
  if (res.status === 200) {
    dispatch(fetchApi(res.data));
    return dispatch(loadIsLoading(false));
  }
  return dispatch(fetchApi({ status: res.errorCode }));
};


/**
 * Post Api
 *
 */


const postApi = value => ({
  type: types.POST_API,
  payload: value,
});

export const loadPostApi = endpoint => async (dispatch) => {
  const res = await api.postApi(endpoint);
  if (res.errorCode === 500) {
    return dispatch(postApi({ status: res.errorCode }));
  }
  return dispatch(postApi(res.data));
};


/**
 * @description
 * User Credential Part
 *
 */

/**
 * Signup New User Part
 *
 * @param {*} value  response api
 * @param {*} endpoint URL Push -> react router
 */

const createUser = (value, location) => ({
  type: types.CREATE_USER_API,
  payload: {
    res: value,
    location,
  },
});

export const loadSignUp = value => async (dispatch) => {
  const res = await api.postCreateUser(value);
  if (res.data.code === '23505') {
    throw new SubmissionError({
      email: 'Email sudah terdaftar..',
      _error: 'Cek pengisian email.',
    });
  }
  return dispatch(createUser(res, '/login'));
};

/**
 * Login
 * @constant loginUser for action Login Part.
 *
 */

const loginUser = value => ({
  type: types.LOGIN_USER_API,
  payload: value,
});

export const loadLogin = value => async (dispatch) => {
  const res = await api.postLoginUser(value);
  const { token, rows } = res.data;

  if (res.status === 200) {
    const { email, username } = rows[0];
    tokenAuth.setCookies(token, { email, username });
    return dispatch(loginUser({ isLoginAuthenticated: tokenAuth.tokenAuthenticated().authToken, location: '/dashboard' }));
  }

  throw new SubmissionError({
    email: true,
    password: true,
    _error: 'Username atau Password salah.',
  });
};

/**
 * @description
 * Check Authenticated User Token Part
 *
 */

export const checkAuth = value => ({
  type: types.CHECK_AUTH,
  payload: value,
});

export const loadCheckAuth = () => async (dispatch) => {
  console.log(tokenAuth.tokenAuthenticated());
  const { dataToken, authToken } = tokenAuth.tokenAuthenticated();
  dispatch(checkAuth({
    isLoginAuthenticated: authToken,
    dataToken,
  }));
};

/**
 * @description
 * Logout User Part
 *
 */

const logOutUser = value => ({
  type: types.LOGOUT_USER,
  payload: value,
});

export const loadLogOut = () => (dispatch) => {
  tokenAuth.eraseCookies();
  dispatch(logOutUser({ isLoginAuthenticated: tokenAuth.tokenAuthenticated().authToken, location: '/login' }));
};
