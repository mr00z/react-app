import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({options}) =>(
    <div className="is-flex" style={{justifyContent: 'center'}}>
        <div className="control">
            <div className="select">
                <select>
                {options.map((value, index) => 
                    <option key={index}>{value}</option>
                )}
                </select>
            </div>
        </div>
    </div>
)

export default Dropdown;

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}