import React from 'react';
import propTypes from 'prop-types';
import './Filter.css';

export default function Filter({ value, onChange }) {
  return (
    <label className="filter__label">
      Find contacts by name
      <input
        className="filter__input"
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
