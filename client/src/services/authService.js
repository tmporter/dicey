import { apiBaseUrl } from "../config";

export const logIn = async (email, password) => {
   return await fetch(`${apiBaseUrl}/auth/login`, {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
   });
};

export const signUp = async (email, password, name) => {
   return await fetch(`${apiBaseUrl}/auth/register`, {
      method: "POST",
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, name })
   });
};

// export const signUp = async (email, password, name) => {
//    return async dispatch => {
//       dispatch(requestSignUp(email, password, name));

//       try {
//          const result = await fetch("https://localhost:3100/register", {
//             method: "POST",
//             body: { email, password, name }
//          });

//          console.log(result);
//          if (result.auth) {
//             dispatch(receiveSignUp(result.token));
//          } else {
//             dispatch(signUpError(result));
//          }
//       } catch (err) {
//          dispatch(signUpError(err));
//       }
//    };
// };
