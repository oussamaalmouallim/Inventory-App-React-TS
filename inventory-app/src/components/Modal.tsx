/* ============================================
      FICHIER: src/components/Modal.tsx
      ============================================ */

import React from 'react';

interface ModalProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ id, title, isOpen, onClose, children }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      id={id}
      className={`modal ${isOpen ? 'active' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};
