import './Popup.css';
import { useEffect } from 'react';

const Popup = ({ children, onClose, isOpen }) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__content">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть всплывающее окно"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
