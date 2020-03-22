import React from 'react';
import Header from './components/Header/Header';
import SongForm from './features/SongForm/components/SongForm';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SongForm />
      <Footer />
    </>
  );
};

export default App;
