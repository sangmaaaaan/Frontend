import React from 'react';
import { Modal } from './Modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-txt_primary bg-opacity-65 z-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <Modal
          innerText="게임을 그만하고 다음 게임으로 넘어갈까요?"
          onClose={onClose} // onClose 함수 전달
        />
      </div>
    </div>
  );
};

export default GameModal;
