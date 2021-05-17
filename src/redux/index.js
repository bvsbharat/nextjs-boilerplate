import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import _ from "underscore";
import thunk from "redux-thunk";
import axios from "axios";
import { generateReducers } from "./util/generateReducers";

// Initial state of redux
const initialState = {
    data: [],
};

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(axios)),
);

// create a reducer function
const { reducer, set, get, push, del, reset, increment, decrement } =
    generateReducers(initialState);

// create a makeStore function
export const makeStore = () => createStore(reducer, enhancer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

export { set, get, push, del, reset, increment, decrement };
