/*eslint-disable prop-types*/
import React from 'react';
import Container from './bulma/Container';
import Header from './presentional/Header';
import SongForm from './presentional/SongForm';

const App = () => {
    return (
        <Container>
            <Header/>
            <SongForm/>
        </Container>
    )
}


export default App;

/*eslint-enable prop-types*/