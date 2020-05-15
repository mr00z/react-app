import { useState, useEffect } from 'react';
import MusicJinnAPIConnector from '../../../integrations/MusicJinnAPIConnector';
import SongsMoodsQuery from './SongsMoodsQuery';

const useSongsMoods = () => {
  const [moods, setMoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSongsMoods = async () => {
    setIsLoading(true);
    const query = new SongsMoodsQuery();
    const response = await MusicJinnAPIConnector.get(query.getQueryString());
    setMoods(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getSongsMoods();
  }, []);

  return [moods, isLoading];
};

export default useSongsMoods;
