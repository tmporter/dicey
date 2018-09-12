import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/logInActions";

const initialState = {
   isFetching: false,
   isAuthenticated: false // todo: pull this from loaded state or localStorage? Also need to check token for expiration
};

const login = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_REQUEST:
         const { username, password } = action;
         return {
            ...state,
            isFetching: true,
            isAuthenticated: false,
            username,
            password
         };
      case LOGIN_SUCCESS:
         const { token } = action;
         return {
            ...state,
            isFetching: false,
            isAuthenticated: true,
            token
         };
      case LOGIN_FAILURE:
         const { message } = action;
         return {
            ...state,
            isFetching: false,
            isAuthenticated: false,
            message
         };
      default:
         return state;
   }
};

export default login;
