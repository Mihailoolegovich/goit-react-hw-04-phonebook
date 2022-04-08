import React, { Component } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    this.state.contacts.find(contact => contact.name.includes(data.name))
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  filterForm = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    const filterLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('contacts'));
    if (data) {
      this.setState({ contacts: data });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filterData = this.findContact();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterForm} />
          <ContactList
            contacts={filterData}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
