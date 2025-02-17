export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_TOTAL = "SET_TOTAL";
export const APPLY_MR = "APPLY_MR";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const TOTAL_CLEAR = "TOTAL_CLEAR";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operation) => ({
  type: CHANGE_OPERATION,
  payload: operation,
});

export const setTotal = () => ({
  type: SET_TOTAL,
});

export const applyMr = () => ({
  type: APPLY_MR,
});

export const memoryClear = () => ({
  type: MEMORY_CLEAR,
});

export const totalClear = () => ({
  type: TOTAL_CLEAR,
});