import * as ActionType from '../actions';


const callApi = (state = { message: 'Call Me!' }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionType.TEST_API:
      return {
        ...state,
        codeResponse: `Code response : ${action.payload.status}`,
        message: action.payload.data.message,
        database: action.payload.data.database,
      };
    default:
      return state;
  }
};

export { callApi };
