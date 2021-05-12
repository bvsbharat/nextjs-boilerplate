import { FAILURE, SET_DATA } from "./actionType";

export const setData = (options) => async (dispatch) => {
    try {
        const { data } = options;
        dispatch({
            type: SET_DATA,
            payload: data,
        });
    } catch (error) {
        console.error(error);
        dispatch({ type: FAILURE, payload: true });
    }
};
