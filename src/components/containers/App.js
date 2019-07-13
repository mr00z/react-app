/*eslint-disable prop-types*/
import React, { useState } from "react";
import Container from "../bulma/Container";
import Header from "../presentional/Header";
import SongForm from "../presentional/SongForm";
import Song from "../presentional/Song";

const App = () => {
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
    <Container>
      <Header />
      <SongForm onSubmit={handleSongFormSubmit} />
      <br />
      {songReady && (
        <Song name={songName} author={songAuthor} hasSong={hasSong} />
      )}
    </Container>
  );
};

export default App;

/*eslint-enable prop-types*/
