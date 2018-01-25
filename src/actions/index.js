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
 * @constant loginUser for action Login.
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

const logOutUser = value => ({
  type: types.LOGOUT_USER,
  payload: value,
});

export const loadLogOut = () => (dispatch) => {
  tokenAuth.eraseCookies();
  dispatch(logOutUser({ isLoginAuthenticated: tokenAuth.tokenAuthenticated().authToken, location: '/login' }));
};
