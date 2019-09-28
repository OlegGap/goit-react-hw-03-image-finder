import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ galleryAll }) => {
  const filter = ({
    id,
    webformatURL,
    largeImageURL,
    likes,
    views,
    comments,
    downloads,
  }) => {
    return {
      id,
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
    };
  };

  return (
    <ul className={styles.gallery}>
      {galleryAll.map(gallery => (
        <PhotoCard key={gallery.id} gallery={filter(gallery)} />
      ))}
    </ul>
  );
};
Gallery.propTypes = {
  galleryAll: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
