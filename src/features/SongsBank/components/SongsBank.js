import React, { useState, useEffect } from 'react';
import SongsQuery from '../SongsQuery';
import Pagination from '../../../components/bulma/Pagination';
import styles from '../songsBank.scss';
import SearchInput from '../../../components/SearchInput/SearchInput';
import Loader from '../../../components/Loader/Loader';
import SongsBankItem from './SongsBankItem';

const SongsBank = () => {
  const initialParameters = { query: null, genres: null, moods: null, resultsPerPage: 12, page: 1 };

  const [queryResult, setQueryResult] = useState(null);
  const [parameters, setParameters] = useState(initialParameters);
  const [isLoading, setIsLoading] = useState(false);

  const getSongs = async (queryParams) => {
    setIsLoading(true);
    const query = new SongsQuery(
      queryParams.query,
      queryParams.genres,
      queryParams.moods,
      queryParams.resultsPerPage,
      queryParams.page
    );

    const result = await query.execute();

    if (result.songs) setQueryResult(result);
    else setQueryResult(null);

    setIsLoading(false);
  };

  const handleResetQuery = () => {
    setParameters(initialParameters);
    getSongs(initialParameters);
  };

  const handleChangePage = (page) => {
    setParameters({ ...parameters, page });
    getSongs({ ...parameters, page });
  };

  useEffect(() => {
    getSongs(initialParameters);
  }, []);

  const songs = queryResult?.songs;
  const pagesCount = queryResult?.pagesCount;

  const { page } = parameters;

  return (
    <div className={styles.container}>
      <h3 className="title has-text-grey-lighter has-text-centered">Songs Bank</h3>
      <div className="columns is-variable is-6-tablet is-4-mobile">
        <div className="column is-half-desktop is-half-tablet">
          <SearchInput
            placeholder="Search for a song or an artist"
            value={parameters.query || ''}
            onInputChange={(e) => setParameters({ ...parameters, query: e.target.value })}
            onButtonClick={() => getSongs({ ...parameters, page: 1 })}
            onReset={handleResetQuery}
          />
        </div>
      </div>
      {isLoading ? (
        <div className={`has-text-centered is-size-4 ${styles.no_results}`}>
          <Loader />
        </div>
      ) : songs && songs.length > 0 ? (
        <>
          <div className="columns is-multiline is-variable is-6-tablet is-4-mobile">
            {songs.map((song, index) => (
              <div className="column is-one-quarter-desktop is-half-tablet" key={index}>
                <SongsBankItem song={song} />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={page > pagesCount ? 1 : page}
            pagesCount={queryResult?.pagesCount}
            onPageClick={handleChangePage}
            itemsInTheMiddleCount={5}
          />
        </>
      ) : (
        <div className={`has-text-centered is-size-4 ${styles.no_results}`}>No results</div>
      )}
    </div>
  );
};

export default SongsBank;
