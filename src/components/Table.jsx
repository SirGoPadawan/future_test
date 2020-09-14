import React, { useState } from "react";

import Paginator from "./Paginator";
import Loader from "./Loader";

export default function Table({ users, loading }) {
  let [idPage, setIdPage] = useState(0);
  const elementsOnPage = 50;
  let indexOfFirstPage = elementsOnPage * idPage;
  let indexOfLastItem = indexOfFirstPage + elementsOnPage;

  const setPageUsers = (id) => {
    setIdPage(Number(id));
  };
  let listUserPage = users.slice(indexOfFirstPage, indexOfLastItem);

  const user = listUserPage.map((obj, index) => (
    <ul key={index} className="row-list">
      <li className="row-item">{obj.id}</li>
      <li className="row-item">{obj.firstName}</li>
      <li className="row-item">{obj.lastName}</li>
      <li className="row-item">{obj.email}</li>
      <li className="row-item">{obj.phone}</li>
    </ul>
  ));
  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="table">
        <section>
          <div className="row-top">
            <button name="id" className="btn btn-down">
              ID
            </button>
            <button name="firstName" className="btn btn-down">
              First Name
            </button>
            <button name="lastName" className="btn btn-down">
              Last Name
            </button>
            <button name="email" className="btn btn-down">
              Email
            </button>
            <button name="phone" className="btn btn-down">
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
