import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
