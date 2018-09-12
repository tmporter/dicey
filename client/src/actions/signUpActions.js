import { signUp } from "../services/authService";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

const requestSignUp = (email, password, name) => ({
   type: SIGNUP_REQUEST,
   email,
   password,
   name
});

const receiveSignUp = token => ({
   type: SIGNUP_SUCCESS,
   token
});

const signUpError = message => ({
   type: SIGNUP_FAILURE,
   message
});

export const signUpAction = (email, password, name) => {
   return async dispatch => {
      dispatch(requestSignUp(email, password, name));

      try {
         const resultRaw = await signUp(email, password, name);
         const result = await resultRaw.json();
         console.log(result);

         if (result.auth) {
            localStorage.setItem("token", result.token);
            dispatch(receiveSignUp(result.token));
         } else {
            dispatch(signUpError(result));
         }
      } catch (error) {
         dispatch(signUpError(error));
      }
   };
};
