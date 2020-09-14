import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import Table from "./components/Table";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Modal from "./components/Modal";

import "./styles/App.scss";

export default function App() {
  let fetchedUsers = useSelector((state) => state.table.fetchedTable);
  let [users, setUsers] = useState([]);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  const filter = (key) => {
    users.sort(function (a, b) {
      return a.id - b.id;
    });
  };
  const searchUsers = (value) => {
    console.log(fetchedUsers);
    if (!value) return setUsers(fetchedUsers);
    let findedUsers = users.filter((obj) =>
      Object.values(obj).some(
        (val) =>
          val
            .toString()
            .toLowerCase()
            .indexOf(value.toString().toLowerCase()) !== -1
      )
    );
    setUsers(findedUsers);
  };
  return (
    <section className="container">
      <Modal />
      <UserList />
      <section className="main">
        <Table users={users} loading={loading} filter={filter} />
        <Search searchUsers={searchUsers} />
      </section>
    </section>
  );
}
