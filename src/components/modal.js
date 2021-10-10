import React, { useContext } from "react";

import { store } from "./store.js";

import "../styles/modal.css";

export const Modal = ({ id, title, children }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  function closeModal() {
    dispatch({ type: "modalChange", payload: null });
  }

  return (
    <div id={id} className={`modal${state.modal === id ? " open" : ""}`}>
      <h2>{title}</h2>
      {children}
      <footer>
        <button onClick={closeModal}>Close</button>
      </footer>
    </div>
  );
};
