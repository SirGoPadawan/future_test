import React, { useState } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../redux/action";

const DEFAULT_USER = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const UserList = ({ createNewUser }) => {
  const [isActive, setActive] = useState(false);

  let [newUser, addUser] = useState(DEFAULT_USER);
  let disabled = true;
  const changeInputHandler = (event) => {
    addUser({ ...newUser, [event.target.name]: event.target.value.trim() });
  };
  const addUserToState = () => {
    createNewUser(newUser);
    addUser(DEFAULT_USER);
  };

  for (let key in newUser) {
    newUser[key] ? (disabled = false) : (disabled = true);
  }

  return (
    <section className="add-row">
      <button onClick={() => setActive(!isActive)} className="btn btn-open">
        Добавить
      </button>
      <section className={`input-list ${isActive ? "active" : "disable"}`}>
        <div>
          <input
            type="text"
            placeholder="ID"
            className="input"
            value={newUser.id}
            name="id"
            required
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="First Name"
            className="input"
            required
            value={newUser.firstName}
            name="firstName"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            required
            name="lastName"
            value={newUser.lastName}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Email"
            className="input"
            required
            value={newUser.email}
            name="email"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Phone"
            className="input"
            required
            name="phone"
            value={newUser.phone}
            onChange={changeInputHandler}
          />
        </div>
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
