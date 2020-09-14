import React from "react";

export default function Paginator({ users, setPageUsers }) {
  let arrPages = [];
  for (let i = 1; i <= Math.ceil(users.length / 50); i++) {
    arrPages.push(i);
  }

  const handleClickPaginator = (event) => {
    setPageUsers(event.target.id);
  };
  return (
    <nav className="paginator">
      <ul className="paginator-list">
        {arrPages.map((elem, index) => (
          <li
            className="paginator-item"
            key={index}
            id={index}
            onClick={handleClickPaginator}
          >
            {elem}
          </li>
        ))}
      </ul>
    </nav>
  );
}
