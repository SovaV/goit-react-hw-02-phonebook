import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>
          <FaTrashAlt size="20px" />
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;
