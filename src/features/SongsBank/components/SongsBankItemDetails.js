import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import styles from '../songsBank.scss';
import { convertSecondsToMinutes } from '../../../../helpers/utils';

const SongsBankItemDetails = ({ song, onClose }) => {
  const lastfmData = song.servicesData?.lastfm?.responseData?.track;
  return (
    <div className={styles.item_details}>
      <section className={styles.item_details_content}>
        <a className={`delete ${styles.close_button}`} onClick={onClose}></a>
        <div className="is-flex">
          <figure>
            <img src={lastfmData?.album.image[2]['#text']} alt="Album cover" />
          </figure>
          <div style={{ flexShrink: 6 }}>
            <h2 className="title is-size-4-mobile">{song.title}</h2>
            <h3 className="subtitle is-size-6-mobile">{song.author}</h3>
          </div>
        </div>
        <br />
        <p>
          Album: {lastfmData?.album?.title} <br />
          Duration: {convertSecondsToMinutes(lastfmData?.duration)}
        </p>
        <br />
        <p className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lastfmData?.wiki?.summary) }}></p>
        <div className="tags">
          {lastfmData?.toptags?.tag?.map((tag, index) => (
            <span className="tag" key={index}>
              <a target="blank" href={tag.url}>
                {tag.name}
              </a>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

SongsBankItemDetails.propTypes = {
  song: PropTypes.object,
  onClose: PropTypes.func,
};

export default SongsBankItemDetails;
