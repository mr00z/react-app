import React from 'react';
//import PropTypes from 'prop-types';
import FormField from '../bulma/FormField';
import Dropdown from '../bulma/Dropdown';

const moods = ['Sad', 'Happy', 'Lazy', 'Nervous'];

const SongForm = () => (
    <form className="grayText">
        <FormField label="How do you feel?">
            <Dropdown options={moods}/>
        </FormField>
        <FormField label="Do you want to stay in this mood?">
            <Dropdown options={['Yes', 'No']}/>
        </FormField>
    </form>
)

export default SongForm;