import React from 'react';
import { Modal } from './Modal';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirmer',
  cancelText = 'Annuler',
  isLoading = false,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      id="confirmModal"
      title={title}
      isOpen={isOpen}
      onClose={onCancel}
    >
      <div className="confirm-modal-content">
        <p className="confirm-modal-message">{message}</p>
        <div className="confirm-modal-actions">
          <button 
            className="btn btn--outline" 
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelText}
          </button>
          <button 
            className="btn btn--primary" 
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? '...' : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};