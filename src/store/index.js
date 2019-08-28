import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { api } from "../config";

const loggerMiddleware = createLogger();

export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk.withExtraArgument({ api }), loggerMiddleware)
  );
};
