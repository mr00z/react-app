import React, { useState, useEffect } from 'react';
import FormField from '../../../components/Form/FormField';
import Dropdown from '../../../components/bulma/Dropdown';
import SubmitButton from '../../../components/Form/SubmitButton';
import Form from '../../../components/Form/Form';
import SongFormResult from './SongFormResult';
import ByMoodJinnQuery from '../ByMoodJinnQuery';
import MusicJinnAPIConnector from '../../../integrations/MusicJinnAPIConnector';
import useSongsMoods from './useSongsMoods';
import RadioButton from '../../../components/Form/RadioButton';
import Control from '../../../components/bulma/Control';

import styles from './songForm.scss';

const SongForm = () => {
  const [songReady, setSongReady] = useState(false);
  const [songName, setSongName] = useState('');
  const [songAuthor, setSongAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const moods = useSongsMoods();

  const [formState, setFormState] = useState({
    mood: null,
    wantToStay: true
  });

  useEffect(() => {
    setFormState({ ...formState, mood: moods[0] });
  }, [moods]);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSongFormSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const { wantToStay, mood } = formState;
    const getSongs = new ByMoodJinnQuery(mood, wantToStay);

    const response = await MusicJinnAPIConnector.get(getSongs.getQueryString());

    setSongName(response?.title);
    setSongAuthor(response?.author);

    setIsLoading(false);
    setSongReady(true);
  };
  return (
    <div className={styles.songForm__container}>
      <Form onSubmit={handleSongFormSubmit}>
        <FormField label="How do you feel?" textAlign="center">
          <Dropdown options={moods} onChange={handleInputChange} name="mood" />
        </FormField>
        <FormField label="Do you want to stay in this mood?" textAlign="center">
          <Control className="has-text-centered">
            <RadioButton
              label="Yes"
              name="wantToStay"
              defaultChecked={formState.wantToStay}
              value={true}
              onChange={handleInputChange}
            />
            <RadioButton
              label="No"
              name="wantToStay"
              defaultChecked={!formState.wantToStay}
              value={false}
              onChange={handleInputChange}
            />
          </Control>
        </FormField>
        <FormField>
          <SubmitButton isLoading={isLoading}>Give me the song!</SubmitButton>
        </FormField>
      </Form>
      {songReady && <SongFormResult name={songName} author={songAuthor} />}
    </div>
  );
};

SongForm.propTypes = {};

export default SongForm;
