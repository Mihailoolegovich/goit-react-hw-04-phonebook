import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.css';

const INITIAL_STATE = { name: '', number: '' };

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const data = { id: nanoid(), name: name, number: number };
    this.props.onSubmit(data);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="container--form" onSubmit={this.handleSubmit}>
        <label className="form__label">
          Name
          <input
            onChange={this.handleChange}
            className="form__input"
            type="text"
            name="name"
            value={name}
            placeholder="Ivan Ivanovich"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="form__label">
          Number
          <input
            onChange={this.handleChange}
            className="form__input"
            type="tel"
            name="number"
            placeholder="xxx-xx-xx"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="form__btn" type="submit" name="button">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
