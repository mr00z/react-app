import React from "react";
import PropTypes from "prop-types";

const Song = ({ name, author }) => (
  <div className="has-text-centered grayText">
    Your song is: <br />
    {name} by {author}
  </div>
);

Song.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string
};

export default Song;
