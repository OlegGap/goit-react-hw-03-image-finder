import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.scss';
import Modal from '../Modal/Modal';

class PhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();
  }

  render() {
    const { gallery } = this.props;
    return (
      <div className={styles.photoCard}>
        <img
          className={styles.photoCardImage}
          src={gallery.webformatURL}
          alt=""
        />

        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {gallery.likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {gallery.views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {gallery.comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {gallery.downloads}
          </p>
        </div>
        <button
          type="button"
          className={styles.fullscreenButton}
          ref={this.myRef.current}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        <Modal imgSrc={gallery.largeImageURL} />
        {/* TODO: add prop DOM NODE (button) to component Modal */}
      </div>
    );
  }
}

PhotoCard.propTypes = {
  gallery: PropTypes.exact({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    likes: PropTypes.number,
    views: PropTypes.number,
    comments: PropTypes.number,
    downloads: PropTypes.number,
  }).isRequired,
};
export default PhotoCard;
