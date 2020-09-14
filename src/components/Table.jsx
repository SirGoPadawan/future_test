import React, { useState } from "react";

import Paginator from "./Paginator";
import Loader from "./Loader";

export default function Table({ users, loading, filter }) {
  let [isSort, setSort] = useState(false);
  const user = users.map((obj, index) => (
    <ul key={index.toString()} className="row-list">
      <li className="row-item">{obj.id}</li>
      <li className="row-item">{obj.firstName}</li>
      <li className="row-item">{obj.lastName}</li>
      <li className="row-item">{obj.email}</li>
      <li className="row-item">{obj.phone}</li>
    </ul>
  ));

  const getNameBtn = (event) => {
    filter(event.target.name);
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="table">
        <section>
          <div className="row-top">
            <button
              name="id"
              className={`btn ${isSort ? "btn-up" : "btn-down"}`}
              onClick={getNameBtn}
            >
              ID
            </button>
            <button
              name="firstName"
              className="btn btn-down"
              onClick={getNameBtn}
            >
              First Name
            </button>
            <button
              name="lastName"
              className="btn btn-down"
              onClick={getNameBtn}
            >
              Last Name
            </button>
            <button name="email" className="btn btn-down" onClick={getNameBtn}>
              Email
            </button>
            <button name="phone" className="btn btn-down" onClick={getNameBtn}>
              Phone
            </button>
          </div>
          <div className="row-bottom">{user}</div>
        </section>
        <Paginator />
      </section>
    );
  }
}
