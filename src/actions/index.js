import { SubmissionError } from 'redux-form';
// import Cookies from 'js-cookie';
import { tokenAuth } from '../middleware/auth-cookies';

import * as api from '../middleware/api';

export const TEST_API = 'TEST_API';
export const CREATE_USER_API = 'CREATE_USER_API';
export const LOGIN_USER_API = 'LOGIN_USER_API';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CHECK_AUTH = 'CHECK_AUTH';

/**
 *  Test API
 * @param {*} value response api
 */

const testApi = value => ({
  type: TEST_API,
  payload: value,
});


export const loadTestApi = () => async (dispatch) => {
  const res = await api.fetchApi();
  if (res.status === 200) {
    return dispatch(testApi(res));
  }
  return dispatch(testApi(res));
};

/**
 * Signup
 * @param {*} value  response api
 * @param {*} endpoint URL Push -> react router
 */

const createUser = (value, location) => ({
  type: CREATE_USER_API,
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
 * @constant loginUser for action Login.
 */

const loginUser = value => ({
  type: LOGIN_USER_API,
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


export const checkAuth = value => ({
  type: CHECK_AUTH,
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

const logOutUser = value => ({
  type: LOGOUT_USER,
  payload: value,
});

export const loadLogOut = () => (dispatch) => {
  tokenAuth.eraseCookies();
  dispatch(logOutUser({ isLoginAuthenticated: tokenAuth.tokenAuthenticated().authToken, location: '/login' }));
};
