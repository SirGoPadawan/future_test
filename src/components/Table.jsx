import React from "react";
import { connect } from "react-redux";
import Paginator from "./Paginator";

const Table = ({ rows }) => {
  const row = rows.map((obj, index) => (
    <ul key={index.toString()} className="row-list">
      <li className="row-item">{obj.id}</li>
      <li className="row-item">{obj.firstName}</li>
      <li className="row-item">{obj.lastName}</li>
      <li className="row-item">{obj.email}</li>
      <li className="row-item">{obj.phone}</li>
    </ul>
  ));
  return (
    <section className="table">
      <section>
        <div className="row-top">
          <button className="btn btn-up">ID</button>
          <button className="btn btn-down">First Name</button>
          <button className="btn btn-down">Phone</button>
          <button className="btn btn-down">Last Name</button>
          <button className="btn btn-down">Email</button>
        </div>
        <div className="row-bottom">{row}</div>
      </section>
      <Paginator countPage={rows.length} />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    rows: state.table.fetchedTable,
  };
};
export default connect(mapStateToProps, null)(Table);
