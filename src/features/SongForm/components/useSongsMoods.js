import { useState, useEffect } from "react";
import MusicJinnAPIConnector from "../../../integrations/MusicJinnAPIConnector";
import SongsMoodsQuery from "../SongsMoodsQuery";

const useSongsMoods = () => {
  const [moods, setMoods] = useState([]);

  const getSongsMoods = async () => {
    const query = new SongsMoodsQuery();
    const response = await MusicJinnAPIConnector.get(query.getQueryString());
    setMoods(response);
  };

  useEffect(() => {
    getSongsMoods();
  }, []);

  return moods;
};

export default useSongsMoods;
