import React from "react";
import { useGlobalContext } from "../../globalContext/context";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";
import Signup from "../../pages/signup/Signup";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        
        <Signup />
        
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
