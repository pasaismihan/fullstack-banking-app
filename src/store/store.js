import {
  combineReducers,
  applyMiddleware,
  compose as createStore,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
