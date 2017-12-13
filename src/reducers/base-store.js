import * as ActionType from '../actions';


const callApi = (state = '', action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionType.TEST_API:
      return {
        ...state,
        codeResponse: `Code response : ${action.payload.status}`,
        message: action.payload.data.message,
        database: action.payload.data.database,
      };
    case ActionType.CREATE_USER_API:
      return {
        ...state,
        res: action.payload,

      };
    default:
      return state;
  }
};

export { callApi };
