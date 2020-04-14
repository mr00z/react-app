import React from 'react';
import Container from '../../../components/bulma/Container';
import Form from '../../../components/Form/Form';
import FormField from '../../../components/Form/FormField';
import AllMoodsSelect from '../../../components/Select/Moods/AllMoodsSelect';
import AllGenresSelect from '../../../components/Select/Genres/AllGenresSelect';
import SubmitButton from '../../../components/Form/SubmitButton';

const MusicPreferences = () => {
  return (
    <Container className="has-text-centered">
      <h3 className="title has-text-grey-lighter">Music Preferences</h3>

      <Form>
        <FormField label="Favorite genres">
          <AllGenresSelect isMulti placeholder="Select your favorite genres..." />
        </FormField>
        <FormField label="Favorite moods">
          <AllMoodsSelect isMulti placeholder="Select your favorite moods..." />
        </FormField>
        <FormField>
          <SubmitButton>Save</SubmitButton>
        </FormField>
      </Form>
    </Container>
  );
};

export default MusicPreferences;
