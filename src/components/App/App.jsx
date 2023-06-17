import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container, Title, Contacts, Info } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
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