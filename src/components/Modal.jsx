import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBigUsers, fetchSmallUsers } from "../redux/action";

export default function Modal() {
  let [isActive, setActive] = useState(true);
  const dispatch = useDispatch();

  const dispatchSmallTable = () => {
    dispatch(fetchSmallUsers());
    setActive(false);
  };
  const dispatchBigTable = () => {
    dispatch(fetchBigUsers());
    setActive(false);
  };
  return (
    <section className={isActive ? "modal" : "modal-disabled"}>
      <section className="modal-items">
        <h2 className="modal-title">Какую таблицу загрузить?</h2>
        <div>
          <button className="btn btn-big" onClick={() => dispatchBigTable()}>
            Большую
          </button>
          <button
            className="btn btn-small"
            onClick={() => dispatchSmallTable()}
          >
            Маленькую
          </button>
        </div>
      </section>
    </section>
  );
}
