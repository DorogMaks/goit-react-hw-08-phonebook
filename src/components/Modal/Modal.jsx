import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContainer } from './ModalStyled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  });

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  // const handleBackdropClick = evt => {
  //   if (evt.target === evt.currentTarget) {
  //     onClose();
  //   }
  // };

  return createPortal(
    // <ModalBackdrop onClick={handleBackdropClick}>
    <ModalBackdrop>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
