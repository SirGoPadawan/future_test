import {
  CREATE_USER,
  FETCH_SMALL_USERS,
  FETCH_BIG_USERS,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./types";

export function createNewUser(newUser) {
  return {
    type: CREATE_USER,
    payload: newUser,
  };
}
export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchSmallUsers() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32})"
    );
    const json = await response.json();
    dispatch({ type: FETCH_SMALL_USERS, payload: json });
    dispatch(hideLoader());
  };
}
export function fetchBigUsers() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    );
    const json = await response.json();
    dispatch({ type: FETCH_BIG_USERS, payload: json });
    dispatch(hideLoader());
  };
}
