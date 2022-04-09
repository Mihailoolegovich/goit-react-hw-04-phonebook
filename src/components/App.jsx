import React, { useState, useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filterName, setFilterName] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (contacts.length === 0) {
      window.localStorage.removeItem('contacts');
      return;
    }

    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const filterLowerCase = filterName.toLowerCase();
    setFilterData(
      contacts.filter(el => el.name.toLowerCase().includes(filterLowerCase))
    );
  }, [contacts, filterName]);

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function formSubmitHandler(data) {
    if (contacts.find(el => el.name.includes(data.name))) {
      return alert(`${data.name} is already in contacts`);
    }
    setContacts([data, ...contacts]);
  }

  function filterForm(e) {
    setFilterName(e.currentTarget.value);
  }

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter value={filterName} onChange={filterForm} />
        <ContactList contacts={filterData} onDeleteContact={deleteContact} />
      </Section>
    </>
  );
}
