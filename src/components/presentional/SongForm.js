import React from "react";
//import PropTypes from 'prop-types';
import FormField from "../bulma/FormField";
import Dropdown from "../bulma/Dropdown";
import SubmitButton from "../bulma/SubmitButton";

const moods = ["Sad", "Happy", "Lazy", "Nervous"];

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songReady: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    //eslint-disable-next-line no-console,no-undef
    console.log(e.target[0].value);
  }

  render() {
    return (
      <form className='grayText' onSubmit={this.handleSubmit}>
        <FormField label='How do you feel?'>
          <Dropdown options={moods} />
        </FormField>
        <FormField label='Do you want to stay in this mood?'>
          <Dropdown options={["Yes", "No"]} />
        </FormField>
        <FormField>
          <SubmitButton />
        </FormField>
      </form>
    );
  }
}

export default SongForm;
