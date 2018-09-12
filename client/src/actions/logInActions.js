import { logIn } from "../services/authService";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const requestLogin = (email, password) => ({
   type: LOGIN_REQUEST,
   email,
   password
});

const receiveLogin = token => ({
   type: LOGIN_SUCCESS,
   token
});

const loginError = message => ({
   type: LOGIN_FAILURE,
   message
});

export const logInAction = (email, password) => {
   return async dispatch => {
      dispatch(requestLogin(email, password));

      try {
         const resultRaw = await logIn(email, password);
         const result = await resultRaw.json();

         if (result.auth) {
            localStorage.setItem("token", result.token);
            dispatch(receiveLogin(result.token));
         } else {
            dispatch(loginError(result));
         }
      } catch (error) {
         dispatch(loginError(error));
      }
   };
};
