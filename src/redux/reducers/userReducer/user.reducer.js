import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../../constants/contants";
const initialState = {
  userData: [],
  isPending: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FAILED:
      return { ...state, isPending: false, error: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, userData: action.payload, isPending: false };
    case GET_USER_PENDING:
      return { ...state, isPending: true };
    default:
      return state;
  }
};

export default userReducer;
