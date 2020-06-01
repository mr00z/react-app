import { useState, useEffect } from 'react';
import MusicJinnAPIConnector from '../../../integrations/MusicJinnAPIConnector';
import SongsGenresQuery from './SongsGenresQuery';

const useSongsGenres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSongsGenres = async () => {
    setIsLoading(true);
    const query = new SongsGenresQuery();
    const response = await MusicJinnAPIConnector.get(query.getQueryString());
    if (!response?.error) setGenres(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getSongsGenres();
  }, []);

  return [genres, isLoading];
};

export default useSongsGenres;
