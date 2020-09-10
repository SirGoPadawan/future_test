import React from "react";

import Table from "./components/Table";
import Paginator from "./components/Paginator";
import AddRow from "./components/AddRow";

import "./styles/App.scss";

export default function App() {
  return (
    <section className="container">
      <AddRow />
      <Table />
      <Paginator />
    </section>
  );
}
