import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imageURL, onClick }) {
  return (
    <li className={styles['gallery-item']}>
      <img src={imageURL} alt="" onClick={onClick} />
    </li>
  );
}
