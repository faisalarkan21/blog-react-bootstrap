
import { SubmissionError } from 'redux-form';

const axios = require('axios');

const instanceAxios = axios.create({
  timeout: 2000,
});


const CREATE_USER = 'http://127.0.0.1:3001/api/users/create-user';
const LOGIN_USER = 'http://127.0.0.1:3001/api/users/login';
const API_ROOT = 'http://127.0.0.1:3001/api';

const showResults = async () => {
  const result = await axios.get(API_ROOT).catch(err => console.error(`Bad request fetch get. \n${err}`));
  if (!result) return;
  alert(result.data.status);
};


const fetchApi = async (endpoint = '', values) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const result = await instanceAxios.get(fullUrl).catch((error) => {
    if (error) {
      return {
        errorCode: 500,
      };
    }
    return error;
  });
  return result;
};


/**
 *
 * @param postApi-> dynamic post api scheme
 */

const postApi = async (values) => {
  console.log(values);
};

/**
 *
 * @param postCreateUser -> Making new User.
 */

const postCreateUser = async (values) => {
  const schema = {
    username: values.name,
    email: values.email,
    password: values.password,
    roleId: 2,
  };

  const result = await instanceAxios.post(CREATE_USER, schema).catch((err) => {
    if (err.response) {
      return err.response;
    }
    throw new SubmissionError({
      _error: 'Internal server Error',
    });
  });

  return result;
};

/**
 *
 * @param postLoginUser -> Login User.
 */

const postLoginUser = async (values) => {
  const schema = {
    email: values.email,
    password: values.password,
  };

  const result = await instanceAxios.post(LOGIN_USER, schema).catch((err) => {
    if (err.response) {
      return err.response;
    }
    throw new SubmissionError({
      _error: 'Internal server Error',
    });
  });

  return result;
};


export { showResults, fetchApi, postApi, postCreateUser, postLoginUser };

