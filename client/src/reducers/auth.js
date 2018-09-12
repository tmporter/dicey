import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/logInActions";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/signUpActions";
import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../actions/logOutActions";

const initialState = {
   isFetching: false,
   isAuthenticated: localStorage.getItem("token") ? true : false // todo: pull this from loaded state or localStorage? Also need to check token for expiration
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_REQUEST:
      case SIGNUP_REQUEST:
         let { email, name } = action;
         return {
            ...state,
            isFetching: true,
            isAuthenticated: false,
            email,
            name
         };
      case LOGIN_SUCCESS:
      case SIGNUP_SUCCESS:
         return {
            ...state,
            isFetching: false,
            isAuthenticated: true
         };
      case LOGIN_FAILURE:
      case SIGNUP_FAILURE:
         let { message } = action;
         return {
            ...state,
            isFetching: false,
            isAuthenticated: false,
            message
         };
      case LOGOUT_REQUEST:
         return {
            ...state,
            isFetching: true
         };
      case LOGOUT_SUCCESS:
         return {
            ...state,
            isFetching: false,
            isAuthenticated: false,
            email: "",
            name: ""
         };
      default:
         return state;
   }
};

export default auth;
