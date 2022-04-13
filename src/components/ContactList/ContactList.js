import React from 'react';
import propTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array,
  onDeleteContact: propTypes.func,
};
