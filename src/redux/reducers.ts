import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';

interface Action {
  type: string;
  payload: any;
}

const initialState = {
  user: null,
  error: null,
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
