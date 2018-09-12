import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/signUpActions";

const initialState = {
   isFetching: false,
   isAuthenticated: false // todo: pull this from loaded state or localStorage? Also need to check token for expiration
};

const signUp = (state = initialState, action) => {
   switch (action.type) {
      case SIGNUP_REQUEST:
         const { username, password } = action;
         return {
            ...state,
            isFetching: true,
            isAuthenticated: false,
            username,
            password
         };
      case SIGNUP_SUCCESS:
         const { token } = action;
         return {
            ...state,
            isFetching: false,
            isAuthenticated: true,
            token
         };
      case SIGNUP_FAILURE:
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

export default signUp;
