import React, { Component } from 'react';
import p from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    return (
      <div className={p.box}>
        <div className={p.wrapp}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </div>
        <div className={p.wrapp}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </div>
        <button>Add contact</button>
      </div>
    );
  }
}

export default ContactForm;
