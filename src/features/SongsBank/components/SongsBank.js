import React, { useState, useEffect } from 'react';
import SongsQuery from '../SongsQuery';
import Pagination from '../../../components/bulma/Pagination';
import styles from '../songsBank.scss';
import SearchInput from '../../../components/SearchInput/SearchInput';

const SongsBank = () => {
  const [queryResult, setQueryResult] = useState(null);
  const [parameters, setParameters] = useState({
    query: null,
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
  }, []);

  const songs = queryResult?.songs;

  return (
    <div className={styles.container}>
      <h3 className="title has-text-grey-lighter has-text-centered">Songs Bank</h3>
      <SearchInput
        placeholder="Search for a song or an artist"
        onInputChange={(e) => setParameters({ ...parameters, query: e.target.value })}
        onButtonClick={getSongs}
      />
      <div className="columns is-multiline is-variable is-6">
        {songs?.map((song, index) => (
          <div className="column is-one-quarter-desktop is-half-tablet" key={index}>
            <div className={`box ${styles.song_box}`}>
              <div className={`${styles.song_box_inner}`}>
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
