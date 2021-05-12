import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./reducer";

import _ from "underscore";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  data: null,
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(axios))
);

// create a makeStore function
const makeStore = (context) => createStore(reducer, enhancer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
