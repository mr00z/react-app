import React from 'react';
import PropTypes from 'prop-types';

import styles from './songForm.scss';
import YouTube from 'react-youtube';

const SongFormResult = ({ song }) => {
  return (
    <div
      data-testid="song-form-result"
      // eslint-disable-next-line max-len
      className={`has-text-centered has-text-light is-size-5-mobile is-size-4-tablet is-size-3-desktop is-size-4-widescreen ${styles.songForm__result}`}
    >
      {song ? (
        <>
          Your song is: <br />
          {song.title} by {song.author}
          {song?.servicesData?.youtube?.responseData && (
            <YouTube
              videoId={song.servicesData.youtube.responseData.id.videoId}
              containerClassName={styles.songForm__result_video_container}
              className={styles.songForm__result_video}
            />
          )}
        </>
      ) : (
        <>No songs matching your criteria</>
      )}
    </div>
  );
};

SongFormResult.propTypes = {
  song: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    moods: PropTypes.array,
    servicesData: PropTypes.object
  })
};

export default SongFormResult;
