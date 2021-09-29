import React, { Component } from 'react';
import Container from '../component/Container/Container';
import shortid from 'shortid';

//====================================
import ContactList from './ContactList/ContactList ';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  //============================================
  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //============================================
  //============================================
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.text.toLowerCase().includes(normalizedFilter));
  };
  //=================================================
  render() {
    const obj = this.state.contacts;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.changeFilter} />
        <ContactList contacts={obj} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
