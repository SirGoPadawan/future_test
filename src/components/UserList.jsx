import React, { useState } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../redux/action";

const UserList = ({ createNewUser }) => {
  const [isActive, setActive] = useState(false);
  let [newUser, addUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeInputHandler = (event) => {
    addUser({ ...newUser, [event.target.name]: event.target.value.trim() });
  };
  let disabled = true;
  for (let key in newUser) {
    newUser[key] ? (disabled = false) : (disabled = true);
  }
  const addUserToState = () => {
    createNewUser(newUser);
  };
  return (
    <section className="add-row">
      <button onClick={() => setActive(!isActive)} className="btn btn-open">
        Добавить
      </button>
      <section className={`input-list ${isActive ? "active" : "disable"}`}>
        <input
          type="text"
          placeholder="ID"
          className="input"
          defaultValue=""
          name="id"
          required
          onChange={changeInputHandler}
        />
        <input
          type="text"
          placeholder="First Name"
          className="input"
          required
          defaultValue=""
          name="firstName"
          onChange={changeInputHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input"
          required
          defaultValue=""
          name="lastName"
          onChange={changeInputHandler}
        />
        <input
          type="text"
          placeholder="Email"
          className="input"
          required
          defaultValue=""
          name="email"
          onChange={changeInputHandler}
        />
        <input
          type="text"
          placeholder="Phone"
          className="input"
          required
          defaultValue=""
          name="phone"
          onChange={changeInputHandler}
        />
        <button
          className="btn btn-add"
          disabled={disabled}
          onClick={addUserToState}
        >
          Добавить в таблицу
        </button>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  createNewUser,
};
export default connect(null, mapDispatchToProps)(UserList);
