import React, { useContext } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

import { store } from "./store.js";

import "../styles/modal.css";

export const Modal = ({ id, title, children }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const modalRef = useDetectClickOutside({ onTriggered: closeModal });

  function closeModal(event) {
    if (
      event.target.getAttribute("aria-controls") !== id &&
      modalRef &&
      modalRef.current.classList.contains("open")
    ) {
      modalRef.current.classList.remove("open");
      dispatch({ type: "modalChange", payload: null });
    }
  }

  return (
    <div
      id={id}
      ref={modalRef}
      className={`modal${state.modal === id ? " open" : ""}`}
    >
      <h2>{title}</h2>
      {children}
      <footer>
        <button onClick={closeModal}>Close</button>
      </footer>
    </div>
  );
};
