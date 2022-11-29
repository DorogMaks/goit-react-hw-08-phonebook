import { TitleApp, TitleContacts, Wrapper } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export const App = () => (
  <Wrapper>
    <TitleApp>Phonebook</TitleApp>
    <ContactForm />
    <TitleContacts>Contacts</TitleContacts>
    <Filter />
    <ContactList />
  </Wrapper>
);
