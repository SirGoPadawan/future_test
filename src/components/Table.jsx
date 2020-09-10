import React from "react";

export default function Table() {
  return (
    <section className="table">
      <div className="row">
        <button className="btn btn-up">ID</button>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="row">
        <button className="btn btn-down">First Name</button>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="row">
        <button className="btn btn-down">Last Name</button>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="row">
        <button className="btn btn-down">Email</button>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="row">
        <button className="btn btn-down">Phone</button>
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
