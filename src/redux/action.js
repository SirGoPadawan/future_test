import { CREATE_USER } from "./types";

export function createNewUser(newUser) {
  return {
    type: CREATE_USER,
    payload: newUser,
  };
}
