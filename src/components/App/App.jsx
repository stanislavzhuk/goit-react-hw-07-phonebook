import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { getContactsThunk } from 'redux/contactsThunk';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { Container, Title, Contacts, Info } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {error && <h2>{error}</h2>}
      {contacts.length ? (
        <>
          <Contacts>Contacts</Contacts>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Info>No any contacts</Info>
      )}
    </Container>
  );
}

export default App;