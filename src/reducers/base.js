import * as ActionType from '../actions';


const showAlert = (state = false, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.SHOW_ALERT:
      return {
        ...state,
        isShow: action.payload.showAlert,
      };
    default:
      return state;
  }
};


export {
  showAlert,
};

