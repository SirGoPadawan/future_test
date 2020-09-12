import React from "react";

export default function Search() {
  return (
    <section className="search">
      <label htmlFor="search-input" className="search-label">
        Поиск по таблице:
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Введите текст"
        className="search-input"
      />
      <button className="btn btn-search">Поиск</button>
    </section>
  );
}
