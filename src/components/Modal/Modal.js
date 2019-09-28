import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import styles from './modal.module.scss';

const Modal = ({ imgSrc }) => {
  return (
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
          <img src={imgSrc} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </Popup>
  );
};

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Modal;
