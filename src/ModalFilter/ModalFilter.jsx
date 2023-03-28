import React from 'react';
import './ModalFilter.css';

// eslint-disable-next-line react/prop-types
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="font-size-30">Filtrar por:</p>
          <p className="closeBtn font-size-30" onClick={onClose}>
            X
          </p>
          <div className="btn-species">
            <button className="btn font-size-30">TODOS</button>
            <button className="btn font-size-30">ALIEN</button>
            <button className="btn font-size-30">HUMAN</button>
            <button className="btn font-size-30">ROBOT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
