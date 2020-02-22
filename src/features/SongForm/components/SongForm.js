import React, { useState, useEffect } from "react";
import FormField from "../../../components/Form/FormField";
import Dropdown from "../../../components/bulma/Dropdown";
import SubmitButton from "../../../components/Form/SubmitButton";
import Form from "../../../components/Form/Form";
import SongFormResult from "./SongFormResult";
import SongsQuery from "../SongsQuery";
import MusicJinnAPIConnector from "../../../integrations/MusicJinnAPIConnector";
import useSongsMoods from "./useSongsMoods";
import RadioButton from "../../../components/Form/RadioButton";
import Control from "../../../components/bulma/Control";

const SongForm = () => {
  const [songReady, setSongReady] = useState(false);
  const [songName, setSongName] = useState("");
  const [songAuthor, setSongAuthor] = useState("");
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
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;
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
    const getSongs = new SongsQuery(mood, wantToStay);

    const response = await MusicJinnAPIConnector.get(getSongs.getQueryString());

    if (response.length > 0) {
      const max = response.length;
      const number = Math.floor(Math.random() * (+max - +0)) + +0;
      setSongName(response[number].name);
      setSongAuthor(response[number].author);
    } else {
      setSongName("");
      setSongAuthor("");
    }
    setIsLoading(false);
    setSongReady(true);
  };
  return (
    <>
      <Form onSubmit={handleSongFormSubmit}>
        <FormField label="How do you feel?">
          <Dropdown options={moods} onChange={handleInputChange} name="mood" />
        </FormField>
        <FormField label="Do you want to stay in this mood?">
          <Control className="has-text-centered">
            <RadioButton
              label="Yes"
              name="wantToStay"
              checked
              onChange={handleInputChange}
            />
            <RadioButton
              label="No"
              name="wantToStay"
              onChange={handleInputChange}
            />
          </Control>
        </FormField>
        <FormField>
          <SubmitButton isLoading={isLoading} />
        </FormField>
      </Form>
      <br />
      {songReady && (
        <SongFormResult
          name={songName}
          author={songAuthor}
          hasSong={songReady}
        />
      )}
    </>
  );
};

SongForm.propTypes = {};

export default SongForm;
