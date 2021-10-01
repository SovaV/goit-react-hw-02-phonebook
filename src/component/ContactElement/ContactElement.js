const ContactsEl = ({ id, name, number }) => (
  <div>
    <p key={id}>
      {name}: {number}
    </p>
  </div>
);

export default ContactsEl;
