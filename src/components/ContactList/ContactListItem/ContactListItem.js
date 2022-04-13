import React from 'react';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './ContactListItem.css';

export default function ContactListItem({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={nanoid()} className="contacts__li" id={id}>
          <div className="contacts__data">
            <p className="contacts__name">{name}: </p>
            <p className="contacts__number">{number}</p>
          </div>
          <button
            className="contacts__btn"
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

ContactListItem.propTypes = {
  contacts: propTypes.array,
  onDeleteContact: propTypes.func,
};
