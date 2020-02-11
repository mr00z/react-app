import React from "react";
import Container from "./components/bulma/Container";
import Header from "./components/Header/Header";
import SongForm from "./features/SongForm/SongForm";

const App = () => {
  return (
    <Container>
      <Header />
      <SongForm />
    </Container>
  );
};

export default App;
