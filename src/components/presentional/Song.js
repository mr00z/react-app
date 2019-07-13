import React from "react";
import PropTypes from "prop-types";

const Song = ({ name, author, hasSong }) => (
  <div className="has-text-centered grayText">
    {hasSong ? (
      <React.Fragment>
        Your song is: <br />
        {name} by {author}
      </React.Fragment>
    ) : (
      <React.Fragment>No songs matching your criteria </React.Fragment>
    )}
  </div>
);

Song.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  hasSong: PropTypes.bool
};

export default Song;
