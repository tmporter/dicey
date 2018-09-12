import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { loadState, saveState } from "./services/localStorage";
import throttle from "lodash";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import stateLogger from "./middleware/stateLogger";
import App from "./components/App/App";

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(reduxThunk, stateLogger));

// todo: throttle this (subscribe doesn't work the way dan's tutorial says it should)
store.subscribe(() => {
   const state = store.getState();
   saveState({ auth: state.auth });
});

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById("root")
);
registerServiceWorker();
