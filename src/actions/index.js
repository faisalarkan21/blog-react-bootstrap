import { SubmissionError } from 'redux-form';
import Cookies from 'js-cookie';


import * as api from '../middleware/api';

export const TEST_API = 'TEST_API';
export const CREATE_USER_API = 'CREATE_USER_API';
export const LOGIN_USER_API = 'LOGIN_USER_API';


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

const createUser = (value, endpoint) => ({
  type: CREATE_USER_API,
  payload: {
    res: value,
    endpoint,
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

const loginUser = (value, endpoint) => ({
  type: LOGIN_USER_API,
  payload: value,
});

export const loadLogin = value => async (dispatch) => {
  const res = await api.postLoginUser(value);
  const { token } = res.data;
  if (res.status === 200) {
    Cookies.set('token', token);
    dispatch(loginUser({ isLoginAuthenticated: true, location: '/dashboard', token }));
  } 
  throw new SubmissionError({
    email: true,
    password: true,
    _error: 'Password atau username anda salah.',
  });
};

