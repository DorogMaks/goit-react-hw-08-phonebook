import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { getFilteredContacts } from './helpers/getFilteredContacts';
import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  console.log(filterValue);
  const filteredContacts = getFilteredContacts(filterValue, contacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
