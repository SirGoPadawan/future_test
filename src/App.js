import React from "react";

import Table from "./components/Table";
import UserList from "./components/UserList";
import Search from "./components/Search";

import "./styles/App.scss";

export default function App() {
  return (
    <section className="container">
      <UserList />
      <section className="main">
        <Table />
        <Search />
      </section>
    </section>
  );
}
