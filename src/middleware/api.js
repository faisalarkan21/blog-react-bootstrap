
import { SubmissionError } from 'redux-form';

const axios = require('axios');

const instanceAxios = axios.create({
  baseURL: 'http://127.0.0.1:3001/api/',
  timeout: 1000,
});


const CREATE_USER = 'http://127.0.0.1:3001/api/users/create-user';
const LOGIN_USER = 'http://127.0.0.1:3001/api/users/login';


const showResults = async () => {
  const result = await axios.get(API_ROOT).catch(err => console.error(`Bad request fetch get. \n${err}`));
  if (!result) return;
  alert(result.data.status);
};


const fetchApi = async (endpoint, values) => {
  const result = await instanceAxios().catch((err) => {
    if (err) {
      return {
        status: '500',
        data: {
          message: 'Hey we got this Ok!, check the API server!',
          database: 'Internal server error.',
        },
      };
    }
    return err;
  });
  return result;
};

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


export { showResults, fetchApi, postCreateUser, postLoginUser };

