import React from "react";
import PropTypes from "prop-types";
import FormField from "../bulma/FormField";
import Dropdown from "../bulma/Dropdown";
import SubmitButton from "../bulma/SubmitButton";

const moods = ["Sad", "Happy", "Lazy", "Nervous"];

const SongForm = ({ onSubmit }) => (
  <form className="grayText" onSubmit={onSubmit}>
    <FormField label="How do you feel?">
      <Dropdown options={moods} />
    </FormField>
    <FormField label="Do you want to stay in this mood?">
      <Dropdown options={["Yes", "No"]} />
    </FormField>
    <FormField>
      <SubmitButton />
    </FormField>
  </form>
);

SongForm.propTypes = {
  onSubmit: PropTypes.func
};

export default SongForm;
