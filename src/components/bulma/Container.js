import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    );
}

export default Container;

Container.propTypes = {
    children: PropTypes.node.isRequired
}