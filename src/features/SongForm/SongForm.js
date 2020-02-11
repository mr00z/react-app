import React, { useState } from "react";
import FormField from "../../components/Form/FormField";
import Dropdown from "../../components/bulma/Dropdown";
import SubmitButton from "../../components/Form/SubmitButton";
import Form from "../../components/Form/Form";
import SongFormResult from "./SongFormResult";

const moods = ["Sad", "Happy", "Lazy", "Nervous"];

const SongForm = () => {
  const [songReady, setSongReady] = useState(false);
  const [songName, setSongName] = useState("");
  const [songAuthor, setSongAuthor] = useState("");
  const [hasSong, setHasSong] = useState(false);

  const handleSongFormSubmit = e => {
    e.preventDefault();

    const mood = e.target[0].value;
    let wantToStay = e.target[1].value;

    if (wantToStay == "Yes") wantToStay = true;
    else wantToStay = false;

    fetch(
      process.env.API_URL + "/songs?mood=" + mood + "&wantToStay=" + wantToStay,
      {}
    ).then(value => {
      value.json().then(json => {
        if (json.length > 0) {
          const max = json.length;
          const number = Math.floor(Math.random() * (+max - +0)) + +0;
          setSongReady(true);
          setSongName(json[number].name);
          setSongAuthor(json[number].author);
          setHasSong(true);
        } else {
          setSongReady(true);
          setSongName("");
          setSongAuthor("");
          setHasSong(false);
        }
      });
    });
  };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

SongForm.propTypes = {};

export default SongForm;
