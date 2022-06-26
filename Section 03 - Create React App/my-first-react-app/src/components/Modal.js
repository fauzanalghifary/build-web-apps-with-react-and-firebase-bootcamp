import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
const Modal = ({ children, handleClose, isSalesModal }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
        <button
          className={isSalesModal ? "sales-btn" : ""}
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
