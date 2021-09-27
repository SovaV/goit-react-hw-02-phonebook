import React, { Component } from 'react';
import Container from '../component/Container/Container';
// import a from './app.module.css';
//====================================
import Contacts from '../component/Contacts/Contacts';
// import ContactForm from './component/ContactForm/ContactForm';
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
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <h2>Contacts</h2>
        <Contacts title="Contacts"></Contacts>
      </Container>
    );
  }
}

export default App;
