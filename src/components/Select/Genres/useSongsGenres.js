import { useState, useEffect } from 'react';
import MusicJinnAPIConnector from '../../../integrations/MusicJinnAPIConnector';
import SongsGenresQuery from './SongsGenresQuery';

const useSongsGenres = () => {
  const [moods, setMoods] = useState([]);

  const getSongsMoods = async () => {
    const query = new SongsGenresQuery();
    const response = await MusicJinnAPIConnector.get(query.getQueryString());
    setMoods(response);
  };

  useEffect(() => {
    getSongsMoods();
  }, []);

  return moods;
};

export default useSongsGenres;
