import React from 'react';
import SubscribePage from './Subscribe';
import './ModalSubscribe.css';

// eslint-disable-next-line react/prop-types
const ModalSubscribe = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalSubscribe"
      >
        <div className="modalRight">
          <p className="closeBtn font-size-30" onClick={onClose}>
            X
          </p>
          <div>
            <SubscribePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSubscribe;
