import * as api from '../middleware/api';

export const TEST_API = 'TEST_API';

const testApi = value => ({
  type: TEST_API,
  payload: value,
});


export const loadTestApi = () => async (dispatch) => {
  const res = await api.fetchApi();
  dispatch(testApi(res));
};

