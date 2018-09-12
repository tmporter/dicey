/*
store: {
   games,
   auth: {
      isFetching,
      isAuthenticated,
      username,
      password,
      name,
      message,
      token
   }
}
*/

import { combineReducers } from "redux";
import games from "./games";
import login from "./login";
import signUp from "./signUp";
import auth from "./auth";

export default combineReducers({
   games,
   auth
   // login,
   // signUp
});
