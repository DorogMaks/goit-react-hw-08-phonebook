import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Section>
        <Container>
          <ContactForm />
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          {error && <b>Ooops, something went wrong</b>}
          <ContactList />
        </Container>
      </Section>
    </>
  );
};

export default Contacts;
