import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
