import React, { useState } from "react";

export default function AddRow() {
  const [isActive, setActive] = useState(false);

  return (
    <section className="add-row">
      <button onClick={() => setActive(!isActive)} className="btn btn-open">
        Добавить
      </button>
      <section className={`input-list ${isActive ? "active" : "default"}`}>
        <input type="text" placeholder="ID" className="input" required />
        <input
          type="text"
          placeholder="First Name"
          className="input"
          required
        />
        <input type="text" placeholder="Last Name" className="input" required />
        <input type="text" placeholder="Email" className="input" required />
        <input type="text" placeholder="Phone" className="input" required />
        <button className="btn btn-add" disabled>
          Добавить в таблицу
        </button>
      </section>
    </section>
  );
}
