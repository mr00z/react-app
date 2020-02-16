import React, { useState } from "react";
import FormField from "../../../components/Form/FormField";
import Dropdown from "../../../components/bulma/Dropdown";
import SubmitButton from "../../../components/Form/SubmitButton";
import Form from "../../../components/Form/Form";
import SongFormResult from "./SongFormResult";
import SongsQuery from "../SongsQuery";
import MusicJinnAPIConnector from "../../../integrations/MusicJinnAPIConnector";
import useSongsMoods from "./useSongsMoods";

const SongForm = () => {
  const [songReady, setSongReady] = useState(false);
  const [songName, setSongName] = useState("");
  const [songAuthor, setSongAuthor] = useState("");
  const [hasSong, setHasSong] = useState(false);

  const moods = useSongsMoods();

  const handleSongFormSubmit = async e => {
    e.preventDefault();

    const mood = e.target[0].value;
    let wantToStay = e.target[1].value;

    if (wantToStay == "Yes") wantToStay = true;
    else wantToStay = false;

    const getSongs = new SongsQuery(mood, wantToStay);

    const response = await MusicJinnAPIConnector.get(getSongs.getQueryString());

    if (response.length > 0) {
      const max = response.length;
      const number = Math.floor(Math.random() * (+max - +0)) + +0;
      setSongReady(true);
      setSongName(response[number].name);
      setSongAuthor(response[number].author);
      setHasSong(true);
    } else {
      setSongReady(true);
      setSongName("");
      setSongAuthor("");
      setHasSong(false);
    }
  };
  return (
    <>
      <Form onSubmit={handleSongFormSubmit}>
        <FormField label="How do you feel?">
          <Dropdown options={moods} />
        </FormField>
        <FormField label="Do you want to stay in this mood?">
          <Dropdown options={["Yes", "No"]} />
        </FormField>
        <FormField>
          <SubmitButton />
        </FormField>
      </Form>
      <br />
      {songReady && (
        <SongFormResult name={songName} author={songAuthor} hasSong={hasSong} />
      )}
    </>
  );
};

SongForm.propTypes = {};

export default SongForm;
