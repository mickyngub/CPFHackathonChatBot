import { INPUT_SUCCESS, INPUT_FAIL } from "./types";

export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch {
    dispatch({ type: INPUT_FAIL });
  }
};
