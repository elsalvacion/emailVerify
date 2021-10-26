import {
  SET_PROCESSING,
  SET_UPLOADING,
  SET_DOWNLOADING,
  RESET,
  SET_RESULT,
} from "./Types";

const emailReducer = (state, action) => {
  switch (action.type) {
    case SET_UPLOADING:
      return {
        ...state,
        result: null,
        uploading: true,
        processing: false,
        downloading: false,
      };
    case SET_PROCESSING:
      return {
        ...state,
        processing: true,
        uploading: false,
        downloading: false,
      };
    case SET_DOWNLOADING:
      return {
        ...state,
        downloading: true,
        processing: false,
        uploading: false,
      };

    case RESET:
      return {
        ...state,
        downloading: false,
        processing: false,
        uploading: false,
      };

    case SET_RESULT:
      return {
        ...state,
        downloading: false,
        processing: false,
        uploading: false,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
