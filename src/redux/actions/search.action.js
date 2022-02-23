import { SET_SEARCH_FIELD } from "../constants/contants";
export const setSearchField = (text) => {
  return {
    type: SET_SEARCH_FIELD,
    payload: text,
  };
};
