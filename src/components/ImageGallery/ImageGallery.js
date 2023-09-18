import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onClick={() => onImgClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
}
