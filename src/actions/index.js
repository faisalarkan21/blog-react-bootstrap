import { SubmissionError } from 'redux-form';

import * as api from '../middleware/api';

export const TEST_API = 'TEST_API';
export const CREATE_USER_API = 'CREATE_USER_API';


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
 *
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
      _error: 'Cek kembali pengisian email.',
    });
  }
  return dispatch(createUser(res, '/login'));
};
