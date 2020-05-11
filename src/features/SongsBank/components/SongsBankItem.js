import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../songsBank.scss';
import SongsBankItemDetails from './SongsBankItemDetails';

const SongsBankItem = ({ song }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const imgSrc = song?.servicesData?.lastfm?.responseData.track.album.image[1]['#text'];
  return (
    <div className={`box ${styles.item}`} onClick={() => setIsDetailsOpen(true)}>
      {imgSrc && (
        <figure className="image is-64x64">
          <img src={imgSrc} alt="Album cover" />
        </figure>
      )}
      <div className={`${styles.item_inner}`}>
        <div className="has-text-weight-bold">{song.title}</div>
        <div>{song.author}</div>
      </div>
      {isDetailsOpen && (
        <SongsBankItemDetails
          song={song}
          onClose={(e) => {
            e.stopPropagation();
            setIsDetailsOpen(false);
          }}
        />
      )}
    </div>
  );
};

SongsBankItem.propTypes = {
  song: PropTypes.object,
};

export default SongsBankItem;
