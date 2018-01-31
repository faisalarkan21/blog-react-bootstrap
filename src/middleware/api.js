
import { SubmissionError } from 'redux-form';

const axios = require('axios');

const instanceAxios = axios.create({
  timeout: 2000,
});


const API_ROOT = 'http://127.0.0.1:3001/api';

/**
 * @param fetchApi get from server *
 */

const fetchApi = async (endpoint = '') => {
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
 * @param postApi post into server
 */

const postApi = async (endpoint = '', values) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const result = await instanceAxios.post(fullUrl, values).catch((error) => {
    if (error.response) {
      return error.response;
    }
    throw new SubmissionError({
      _error: 'Internal server Error',
    });
  });
  return result;
};


export { fetchApi, postApi };

