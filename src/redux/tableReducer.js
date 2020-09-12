import { CREATE_USER } from "./types";

const initialState = {
  fetchedTable: [
    {
      id: 101,
      firstName: "Sue",
      lastName: "Corson",
      email: "DWhalley@in.gov",
      phone: "(612)211-6296",
    },
    {
      id: 101,
      firstName: "Sue",
      lastName: "Corson",
      email: "DWhalley@in.gov",
      phone: "(612)211-6296",
    },
    {
      id: 101,
      firstName: "Sue",
      lastName: "Corson",
      email: "DWhalley@in.gov",
      phone: "(612)211-6296",
    },
    {
      id: 101,
      firstName: "Sue",
      lastName: "Corson",
      email: "DWhalley@in.gov",
      phone: "(612)211-6296",
    },
  ],
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log(action.payload);
      return {
        ...state,
        fetchedTable: state.fetchedTable.concat([action.payload]),
      };
    default:
      return state;
  }
};
