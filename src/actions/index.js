import { SubmissionError } from 'redux-form';
import { notify } from 'reapop';

import { tokenAuth } from '../middleware/auth-cookies';
import * as api from '../middleware/api';
import * as types from '../constants/ActionTypes';
import * as helper from '../middleware/helper';

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
 *  Action fetch if error occurred
 * @param {*} bool loading parameter true or false
 *
 */

export const loadIsFetchError = errorCode => ({
  type: types.FETCH_ERROR,
  errorCode,
});


/**
 *  Fetch API
 * @param {*} value response api
 *
 */

const fetchApiUsers = (users, status) => ({
  type: types.FETCH_GET_USERS,
  users,
  status,
});


export const loadGetUsers = () => async (dispatch) => {
  const res = await api.fetchApi('/users');

  if (res.status === 200) {
    dispatch(fetchApiUsers(res.data));
    dispatch(notify(helper.messageTypes(
      'info',
      `Terdapat Total ${res.data.length} Pengguna`,
    )));
  } else if (res.status === 404) {
    dispatch(loadIsFetchError(404));
  } else {
    dispatch(loadIsFetchError(500));
  }
  dispatch(loadIsLoading(false));
};

const fetchApiUser = (user, status) => ({
  type: types.FETCH_GET_USER,
  user,
  status,
});

export const loadGetUser = endpoint => async (dispatch) => {
  const res = await api.fetchApi(endpoint);
  dispatch(loadIsLoading(true));
  if (res.status === 200) {
    dispatch(fetchApiUser(res.data, res.status));
  } else if (res.status === 404) {
    dispatch(loadIsFetchError(404));
  } else {
    dispatch(loadIsFetchError(500));
  }
  dispatch(loadIsLoading(false));
};


const fetchApiHome = (homeData, status) => ({
  type: types.FETCH_GET_HOME_DATA,
  homeData,
  status,
});

export const loadGetHome = () => async (dispatch) => {
  const res = await api.fetchApi('/users/data/list-stat-users');

  dispatch(loadIsLoading(true));
  if (res.status === 200) {
    dispatch(fetchApiHome(res.data));
  } else if (res.status === 404) {
    dispatch(loadIsFetchError(404));
  } else {
    dispatch(loadIsFetchError(500));
  }
  dispatch(loadIsLoading(false));
};


const postApi = (user, status) => ({
  type: types.POST_API,
  user,
  status,
});

export const loadPostApi = (endpoint, value) => async (dispatch) => {
  const res = await api.postApi(endpoint, value);

  if (res.errorCode === 500) {
    dispatch(notify(helper.messageTypes('error')));
    return dispatch(postApi({ status: res.errorCode }));
  }
  dispatch(notify(helper.messageTypes('success')));
  dispatch(loadGetUser(`/users/${res.data.user_id}`));
  return dispatch(postApi(res.data, res.status));
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


export const loadSignUp = (endpoint, value) => async (dispatch) => {
  const res = await api.postApi(endpoint, value);
  if (res.data.code === '23505') {
    throw new SubmissionError({
      email: 'Email sudah terdaftar..',
      _error: 'Cek pengisian email.',
    });
  }
  // return dispatch(createUser(res, '/login'));
  return dispatch(postApi(Object.assign({ res }, { toLocation: '/login' })));
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

export const loadLogin = (endpoint, value) => async (dispatch) => {
  const res = await api.postApi(endpoint, value);

  if (res.status === 200) {
    const { token, rows } = res.data;
    const { email, username } = rows[0];
    tokenAuth.setCookies(token, { email, username });
    return dispatch(loginUser({
      isLoginAuthenticated: tokenAuth.tokenAuthenticated().authToken,
      location: '/dashboard',
    }));
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
  dispatch(logOutUser({
    isLoginAuthenticated: tokenAuth.tokenAuthenticated().authToken,
    location: '/login',
  }));
};
