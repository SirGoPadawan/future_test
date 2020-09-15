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

  let [id, setId] = useState(null);

  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  const searchUsers = (value) => {
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

  const filter = (key, sort) => {
    switch (key) {
      case "id": {
        const asc = sort !== "asc";
        const compare = (prevObj, nextObj) => {
          return asc
            ? prevObj[key] - nextObj[key]
            : nextObj[key] - prevObj[key];
        };
        setUsers(users.sort(compare).concat());
        break;
      }
      default: {
        const asc = sort !== "asc";
        const compare = (prevObj, nextObj) => {
          if (prevObj[key] > nextObj[key]) {
            return asc ? 1 : -1;
          }
          if (prevObj[key] < nextObj[key]) {
            return asc ? -1 : 1;
          }
          return 0;
        };
        setUsers(users.sort(compare).concat());
      }
    }
  };
  const checkUser = (index) => {
    setId(index);
  };
  return (
    <section className="container">
      <Modal />
      <UserList />
      <section className="main">
        <Table
          users={users}
          loading={loading}
          filter={filter}
          checkUser={checkUser}
        />
        <Search searchUsers={searchUsers} users={users} id={id} />
      </section>
    </section>
  );
}
