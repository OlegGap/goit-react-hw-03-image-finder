import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import PhotoCard from '../PhotoCard/PhotoCard';
import filterGalleryFilds from '../../utils/filterGalleryFilds.js';

const Gallery = ({ galleryAll }) => (
  <ul className={styles.gallery}>
    {galleryAll.map(gallery => (
      <PhotoCard key={gallery.id} gallery={filterGalleryFilds(gallery)} />
    ))}
  </ul>
);

Gallery.propTypes = {
  galleryAll: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
