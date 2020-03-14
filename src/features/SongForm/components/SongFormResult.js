import React from "react";
import PropTypes from "prop-types";

const SongFormResult = ({ name, author, hasSong }) => (
  <div className="has-text-centered has-text-grey-lighter">
    {hasSong ? (
      <>
        Your song is: <br />
        {name} by {author}
      </>
    ) : (
      <>No songs matching your criteria</>
    )}
  </div>
);

SongFormResult.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  hasSong: PropTypes.bool
};

export default SongFormResult;
