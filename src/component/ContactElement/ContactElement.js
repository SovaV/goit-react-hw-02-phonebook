import PropTypes from 'prop-types';
import ce from './ContactElement.module.css';
const ContactsEl = ({ name, number }) => (
  <div className={ce.box}>
    <p>{name}</p>
    <p>: {number}</p>
  </div>
);
ContactsEl.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactsEl;
