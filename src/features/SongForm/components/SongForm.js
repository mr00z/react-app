import React, { useState } from 'react';
import Select from 'react-select';
import FormField from '../../../components/Form/FormField';
import SubmitButton from '../../../components/Form/SubmitButton';
import Form from '../../../components/Form/Form';
import SongFormResult from './SongFormResult';
import ByMoodJinnQuery from '../ByMoodJinnQuery';
import MusicJinnAPIConnector from '../../../integrations/MusicJinnAPIConnector';
import useSongsMoods from './useSongsMoods';
import RadioButton from '../../../components/Form/RadioButton';
import Control from '../../../components/bulma/Control';

import styles from './songForm.scss';
import theme from '../../../components/react-select/theme';

const SongForm = () => {
  const [songReady, setSongReady] = useState(false);
  const [song, setSong] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const allMoods = useSongsMoods();

  const [formState, setFormState] = useState({
    mood: null,
    wantToStay: true,
  });

  const handleSelectChange = (input) => {
    if (!input) return;

    setFormState({
      ...formState,
      mood: input.value,
    });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSongFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { wantToStay, mood } = formState;
    const getSongs = new ByMoodJinnQuery(mood, wantToStay);

    const response = await MusicJinnAPIConnector.get(getSongs.getQueryString());

    setSong(response);

    setIsLoading(false);
    setSongReady(true);
  };
  return (
    <div className={styles.songForm__container}>
      <Form onSubmit={handleSongFormSubmit}>
        <FormField label="How do you feel?" textAlign="center">
          <Select
            options={allMoods.map((element) => ({ value: element, label: element }))}
            onChange={handleSelectChange}
            name="mood"
            className={`${styles.songForm__select} has-text-grey-dark`}
            theme={theme}
            placeholder="Select your current mood..."
          />
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
          <SubmitButton isLoading={isLoading} disabled={formState.mood === null}>
            Give me the song!
          </SubmitButton>
        </FormField>
      </Form>
      {songReady && <SongFormResult song={song} />}
    </div>
  );
};

SongForm.propTypes = {};

export default SongForm;
