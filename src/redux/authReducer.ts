import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types';

type AuthState = {
  isLoggedIn: boolean;
  user: null | User;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthAction =
  | { type: typeof LOGIN_SUCCESS; payload: User }
  | { type: typeof LOGIN_FAILURE }
  | { type: typeof LOGOUT };

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
