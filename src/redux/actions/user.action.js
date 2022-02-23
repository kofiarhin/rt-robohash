import { GET_USER_PENDING, GET_USER_SUCCESS } from "../constants/contants";

export const getUsers = () => (dispatch) => {
  dispatch({
    type: GET_USER_PENDING,
  });

  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: result,
      });
    });
};
