/*eslint-disable prop-types*/
import React from "react";
import Container from "../bulma/Container";
import Header from "../presentional/Header";
import SongForm from "../presentional/SongForm";
import Song from "../presentional/Song";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songReady: false, songName: "", songAuthor: "" };
    this.handleSongFormSubmit = this.handleSongFormSubmit.bind(this);
  }

  handleSongFormSubmit(e) {
    e.preventDefault();

    const mood = e.target[0].value;
    let wantToStay = e.target[1].value;

    if (wantToStay == "Yes") wantToStay = true;
    else wantToStay = false;

    fetch(
      process.env.API_URL + "/songs?mood=" + mood + "?wantToStay=" + wantToStay,
      {}
    ).then(value => {
      value.json().then(json => {
        const max = json.length;
        const number = Math.floor(Math.random() * (+max - +0)) + +0;
        this.setState({
          songReady: true,
          songName: json[number].name,
          songAuthor: json[number].author
        });
      });
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <SongForm onSubmit={this.handleSongFormSubmit} />
        <br />
        {this.state.songReady && (
          <Song name={this.state.songName} author={this.state.songAuthor} />
        )}
      </Container>
    );
  }
}

export default App;

/*eslint-enable prop-types*/
