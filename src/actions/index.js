import { SubmissionError } from 'redux-form';
import { notify } from 'reapop';
// import Cookies from 'js-cookie';
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
 *  Fetch API
 * @param {*} value response api
 *
 */

const fetchApi = (dataArray, dataObject, status) => ({
  type: types.FETCH_API,
  dataArray,
  dataObject,
  status,
});


export const loadFetchApi = endpoint => async (dispatch) => {
  const res = await api.fetchApi(endpoint);

  dispatch(loadIsLoading(true));

  if (res.errorCode === 500) {
    /**
     * @throws if error occurred
     */
    dispatch(fetchApi([], {}, res.errorCode));
  } else if (Array.isArray(res.data) && res.data.length !== 0) {
    /**
     * @type if response is array object data
     */
    dispatch(notify(helper.messageTypes(
      'info',
      `Terdapat Total ${res.data.length} Pengguna`,
    )));
    dispatch(fetchApi(res.data, {}, 200));
  } else if (res.data.length !== 0 && res.data !== '') {
    /**
     * @type if response is single object data
     */
    dispatch(fetchApi([], res.data, 200));
  } else {
    /**
     * @function 404 if response was blank
     */

    dispatch(fetchApi([], {}, 404));
  }

  /**
   * @default loadIsLoading will dispatch in the end,
   * meaning redux has received data.
   */
  return dispatch(loadIsLoading(false));
};


/**
 * Post Api
 *
 */


const postApi = value => ({
  type: types.POST_API,
  dataObject: value,
});

export const loadPostApi = (endpoint, value) => async (dispatch) => {
  const res = await api.postApi(endpoint, value);

  if (res.status === 200) {
    dispatch(postApi(res.data));
    dispatch(notify(helper.messageTypes('success')));
    return dispatch(loadFetchApi(`/users/${res.data.user_id}`));
  }
  dispatch(postApi(res));
  return dispatch(notify(helper.messageTypes('error')));
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

const createUser = (dataObject, location) => ({
  type: types.POST_API,
  dataObject,
  location,
});

export const loadSignUp = (endpoint, value) => async (dispatch) => {
  const res = await api.postApi(endpoint, value);
  if (res.data.code === '23505') {
    throw new SubmissionError({
      email: 'Email sudah terdaftar..',
      _error: 'Cek pengisian email.',
    });
  }
  // return dispatch(createUser(res, '/login'));
  return dispatch(createUser(Object.assign({ res }, { location: '/login' })));
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
  const { token, rows } = res.data;
  console.log(res);
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
