import React, { useState } from "react";

export default function Search({ searchUsers }) {
  let [value, setValue] = useState("");

  const changeValueHandler = (event) => {
    setValue(event.target.value.trim());
  };

  return (
    <section className="search">
      <label htmlFor="search-input" className="search-label">
        Поиск по таблице:
      </label>
      <input
        name="search-input"
        type="text"
        placeholder="Введите текст"
        className="search-input"
        onChange={changeValueHandler}
        defaultValue=""
      />
      <button className="btn btn-search" onClick={() => searchUsers(value)}>
        Поиск
      </button>
    </section>
  );
}
