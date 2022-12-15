import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from 'hooks';
import { ContactList } from 'components/ContactList/ContactList';
import { MessageContainer } from 'components/Shared/MessageContainerStyled';

const Contacts = () => {
  const { user } = useAuth();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      {error && <b>Ooops, something went wrong</b>}
      {!isLoading && contacts.length === 0 && (
        <MessageContainer>
          Welcome {user.name}!
          <br />
          Your phonebook is empty for now
        </MessageContainer>
      )}
      <ContactList />
    </>
  );
};

export default Contacts;
