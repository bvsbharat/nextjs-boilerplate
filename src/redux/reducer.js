import _ from "underscore";
import { HYDRATE } from "next-redux-wrapper";
import { SET_DATA, FAILURE } from "./actionType";

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      if (state.count) nextState.count = state.count;
      return nextState;
    case SET_DATA: {
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    }
    case FAILURE:
      return { data: null, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
