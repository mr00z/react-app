import React, { useState, useEffect } from 'react';
import SongsQuery from '../SongsQuery';
import Pagination from '../../../components/bulma/Pagination';
import styles from '../songsBank.scss';

const SongsBank = () => {
  const [queryResult, setQueryResult] = useState(null);
  const [parameters, setParameters] = useState({
    title: null,
    author: null,
    genres: null,
    moods: null,
    resultsPerPage: 12,
    page: 1,
  });

  const getSongs = async () => {
    const query = new SongsQuery(...Object.values(parameters));

    const result = await query.execute();

    if (result) setQueryResult(result);
  };

  useEffect(() => {
    getSongs();
  }, [parameters]);

  const songs = queryResult?.songs;

  return (
    <div className={styles.songsBank__container}>
      <h3 className="title has-text-grey-lighter has-text-centered">Songs Bank</h3>
      <div className="columns is-multiline">
        {songs?.map((song, index) => (
          <div className="column is-one-quarter-desktop is-half-tablet" key={index}>
            <div className={`box ${styles.songsBank__song_box}`}>
              <div className={`${styles.songsBank__song_box_inner}`}>
                <div>{song.title}</div>
                <div className="has-text-weight-bold">{song.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={parameters.page}
        pagesCount={queryResult?.pagesCount}
        onPageClick={(page) => setParameters({ ...parameters, page })}
        itemsInTheMiddleCount={5}
      />
    </div>
  );
};

export default SongsBank;
