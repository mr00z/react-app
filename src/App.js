import React from 'react';
import Container from './components/bulma/Container';
import Header from './components/Header/Header';
import SongForm from './features/SongForm/components/SongForm';
import Navbar from './components/Navigation/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <SongForm />
      </Container>
    </>
  );
};

export default App;
