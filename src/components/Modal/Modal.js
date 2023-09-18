import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

export default function Modal({ imageURL, onClose }) {
  const handleEsc = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageURL} alt="Modal Content" />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
