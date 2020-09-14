import { CREATE_USER, FETCH_SMALL_USERS, FETCH_BIG_USERS } from "./types";

const initialState = {
  fetchedTable: [],
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        fetchedTable: [action.payload, ...state.fetchedTable],
      };
    }
    case FETCH_SMALL_USERS: {
      return { ...state, fetchedTable: action.payload };
    }
    case FETCH_BIG_USERS: {
      return { ...state, fetchedTable: action.payload };
    }
    default:
      return state;
  }
};
