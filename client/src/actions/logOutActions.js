export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

const requestLogout = () => ({
   type: "LOGOUT_REQUEST",
   isFetching: true,
   isAuthenticated: true
});

const receiveLogout = () => ({
   type: "LOGOUT_SUCCESS",
   isFetching: false,
   isAuthenticated: false
});

export const logOutAction = () => {
   return dispatch => {
      dispatch(requestLogout());
      localStorage.removeItem("token");
      dispatch(receiveLogout());
   };
};
