import React, { useState } from 'react';
import Container from '../../../components/bulma/Container';
import Form from '../../../components/Form/Form';
import FormField from '../../../components/Form/FormField';
import AllMoodsSelect from '../../../components/Select/Moods/AllMoodsSelect';
import AllGenresSelect from '../../../components/Select/Genres/AllGenresSelect';
import SubmitButton from '../../../components/Form/SubmitButton';
import { getMusicPreferences, setMusicPreferences } from '../localStorageUtils';

const MusicPreferences = () => {
  const [formState, setFormState] = useState(getMusicPreferences());
  const [isSaved, setIsSaved] = useState(false);

  const handleSelectChange = (input, name) => {
    if (!input) return;

    setFormState({
      ...formState,
      [name]: input,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setMusicPreferences(formState);
    setIsSaved(true);
  };

  return (
    <Container className="has-text-centered">
      <h3 className="title has-text-grey-lighter">Music Preferences</h3>

      <Form onSubmit={handleFormSubmit}>
        <FormField label="Favorite genres">
          <AllGenresSelect
            isMulti
            placeholder="Select your favorite genres..."
            name="genres"
            onChange={(input) => handleSelectChange(input, 'genres')}
            value={formState?.genres}
          />
        </FormField>
        <FormField label="Favorite moods">
          <AllMoodsSelect
            isMulti
            placeholder="Select your favorite moods..."
            name="moods"
            onChange={(input) => handleSelectChange(input, 'moods')}
            value={formState?.moods}
          />
        </FormField>
        <FormField>
          <SubmitButton>Save</SubmitButton>
        </FormField>
        {isSaved && <div className="has-text-light">Your preferences have been successfully saved</div>}
      </Form>
    </Container>
  );
};

export default MusicPreferences;
