import React from 'react';
import PropTypes from 'prop-types';

import styles from './songForm.scss';

const SongFormResult = ({ name, author }) => {
  const hasSong = name && author;
  return (
    <div
      data-testid="song-form-result"
      // eslint-disable-next-line max-len
      className={`has-text-centered has-text-light is-size-5-mobile is-size-4-tablet is-size-3-desktop is-size-4-widescreen ${styles.songForm__result}`}
    >
      {hasSong ? (
        <>
          Your song is: <br />
          {name} by {author}
        </>
      ) : (
        <>No songs matching your criteria</>
      )}
    </div>
  );
};

SongFormResult.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string
};

export default SongFormResult;
