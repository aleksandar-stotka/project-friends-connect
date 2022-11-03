import React from "react";
import { useGlobalContext } from "../../globalContext/context";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";
import Create from "../../pages/create/Create";
import { useHistory } from "react-router-dom";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const history = useHistory();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <Create />
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
