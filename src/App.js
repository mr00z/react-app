import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import MainRoutes from './routes/MainRoutes';
import Container from './components/bulma/Container';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Container className="app__container">
        <MainRoutes />
      </Container>
      <Footer />
    </>
  );
};

export default App;
