import { SET_PROCESSING, RESET, SET_RESULT } from "./Types";

const emailReducer = (state, action) => {
  switch (action.type) {
    case SET_PROCESSING:
      return {
        ...state,
        processing: true,
      };

    case RESET:
      return {
        ...state,
        processing: false,
      };

    case SET_RESULT:
      return {
        ...state,
        processing: false,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
