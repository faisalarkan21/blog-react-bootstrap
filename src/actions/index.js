import { SubmissionError } from 'redux-form';
import Cookies from 'js-cookie';


import * as api from '../middleware/api';

export const TEST_API = 'TEST_API';
export const CREATE_USER_API = 'CREATE_USER_API';
export const LOGIN_USER_API = 'LOGIN_USER_API';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REHYDRATE = 'REHYDRATE';

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
  dispatch(testApi(res));
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
  const { token } = res.data;
  if (res.status === 200) {
    Cookies.set('userToken', token);
    dispatch(loginUser({ isLoginAuthenticated: true, location: '/dashboard' }));
  }
  throw new SubmissionError({
    email: true,
    password: true,
    _error: 'Password atau username anda salah.',
  });
};


const logOutUser = value => ({
  type: LOGOUT_USER,
  payload: value,
});

export const loadLogOut = () => async (dispatch) => {
  Cookies.remove('userToken', { path: '' });
  dispatch(logOutUser({ isLoginAuthenticated: false, location: '/login' }));
};
