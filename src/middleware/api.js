
import { SubmissionError } from 'redux-form';

const axios = require('axios');
const querystring = require('querystring');

const instanceAxios = axios.create({
  baseURL: 'http://127.0.0.1:3001/api/',
  timeout: 1000,
});


const CREATE_USER = 'http://127.0.0.1:3001/api/users/create-user';

const showResults = async () => {
  const result = await axios.get(API_ROOT).catch(err => console.error(`Bad request fetch get. \n${err}`));
  if (!result) return;
  alert(result.data.status);
  console.log(result);
};


const fetchApi = async (endpoint) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const result = await instanceAxios(fullUrl).catch(err => console.error(`Bad request on call api get. \n${err}`));
};

const postApi = async (values) => {
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


export { showResults, fetchApi, postApi };

