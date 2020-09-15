import React from "react";

export default function AboutUser({ findedUser }) {
  console.log(findedUser);
  return (
    <section className="about-user">
      <textarea
        value={findedUser.description}
        className="about-user__text-area"
        readOnly
      />
      <span>
        Адрес проживания:
        <b>{findedUser.address.streetAddress}</b>
      </span>
      <span>
        Город: <b>{findedUser.address.city}</b>
      </span>
      <span>
        Провинция/штат: <b>{findedUser.address.state}</b>
      </span>
      <span>
        Индекс: <b>{findedUser.address.zip}</b>
      </span>
    </section>
  );
}
