import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <h2>
            {props.text}
        </h2>
    )
}

App.propTypes = {
    text: PropTypes.string
};

export default App;