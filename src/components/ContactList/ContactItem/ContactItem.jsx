import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button, Contact, ListItem } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const onDelContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ListItem>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => onDelContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
