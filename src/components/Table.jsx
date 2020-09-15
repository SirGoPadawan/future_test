import React, { useState } from "react";

import Paginator from "./Paginator";
import Loader from "./Loader";

export default function Table({ users, loading, filter, checkUser }) {
  let DEFAULT_SORT = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  let [obj, setSort] = useState(DEFAULT_SORT);
  let [idPage, setIdPage] = useState(0);
  const elementsOnPage = 50;
  let indexOfFirstPage = elementsOnPage * idPage;
  let indexOfLastItem = indexOfFirstPage + elementsOnPage;

  const setPageUsers = (id) => {
    setIdPage(Number(id));
  };

  let listUserPage = users.slice(indexOfFirstPage, indexOfLastItem);

  const clickUserHandler = (index) => {
    checkUser(index);
  };
  const user = listUserPage.map((obj, index) => (
    <ul
      key={index}
      className="row-list"
      onClick={() => clickUserHandler(index)}
    >
      <li className="row-item">{obj.id}</li>
      <li className="row-item">{obj.firstName}</li>
      <li className="row-item">{obj.lastName}</li>
      <li className="row-item">{obj.email}</li>
      <li className="row-item">{obj.phone}</li>
    </ul>
  ));

  const classHandler = (key) => {
    if (obj[key]) {
      if (obj[key] === "asc") {
        return "btn-down";
      } else {
        return "btn-up";
      }
    }
  };

  const sortClickHandler = (event) => {
    let key = event.target.id;
    filter(key, obj[key]);
    obj[key] === "asc"
      ? setSort({ ...DEFAULT_SORT, [event.target.id]: "desc" })
      : setSort({ ...DEFAULT_SORT, [event.target.id]: "asc" });
  };
  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="table">
        <section>
          <div className="row-top">
            <button
              id="id"
              className={`btn btn-def-search ${classHandler("id")}`}
              onClick={sortClickHandler}
            >
              ID
            </button>
            <button
              id="firstName"
              className={`btn btn-def-search ${classHandler("firstName")}`}
              onClick={sortClickHandler}
            >
              First Name
            </button>
            <button
              id="lastName"
              className={`btn btn-def-search ${classHandler("lastName")}`}
              onClick={sortClickHandler}
            >
              Last Name
            </button>
            <button
              id="email"
              className={`btn btn-def-search ${classHandler("email")}`}
              onClick={sortClickHandler}
            >
              Email
            </button>
            <button
              id="phone"
              className={`btn btn-def-search ${classHandler("phone")}`}
              onClick={sortClickHandler}
            >
              Phone
            </button>
          </div>
          <div className="row-bottom">{user}</div>
        </section>
        <Paginator users={users} setPageUsers={setPageUsers} />
      </section>
    );
  }
}
