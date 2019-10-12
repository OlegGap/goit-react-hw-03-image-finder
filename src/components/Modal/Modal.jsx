import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import ContentLoader from 'react-content-loader';
import ImageLoader from 'react-load-image';
import styles from './modal.module.scss';

const Modal = ({ imgSrc }) => (
  <Popup
    trigger={
      <button type="button" className={styles.fullscreenButton}>
        <i className="material-icons">zoom_out_map</i>
      </button>
    }
    modal
  >
    <div className={styles.modal}>
      <div className={styles.content}>
        <ImageLoader src={imgSrc}>
          <img className={styles.modalImage} alt="" />
          <div>Error! :( </div>
          <ContentLoader height={300} width={500} />
        </ImageLoader>
      </div>
    </div>
  </Popup>
);

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Modal;
