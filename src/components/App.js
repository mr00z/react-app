import React from 'react';
import PropTypes from 'prop-types';
import headphones from '../assests/music.png';

const App = (props) => {
    return (
        <div>
            <h2>
                {props.text}
            </h2>
            <img src={headphones}/>
        </div>
    )
}

App.propTypes = {
    text: PropTypes.string
};

export default App;