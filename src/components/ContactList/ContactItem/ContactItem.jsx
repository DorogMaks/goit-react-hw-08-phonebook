import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button, Contact, ListItem } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onDelContact = () => dispatch(deleteContact(id));

  return (
    <ListItem>
      <Contact>
        {name}: {phone}
      </Contact>
      <Button type="button" onClick={onDelContact}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
