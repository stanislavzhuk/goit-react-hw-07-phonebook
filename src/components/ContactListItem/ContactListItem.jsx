import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContactThunk } from 'redux/contactsThunk';
import { notifyDeleteContact } from 'services/notify';
import { Item, Button, Contact } from './ContactListItem.styled';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterByName = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = filterByName(normalizedFilter);

  const onDelete = (id) => {
    dispatch(deleteContactThunk(id));
    notifyDeleteContact();
  };

  return filtredContacts.sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name, phone }) => {
    return (
      <Item key={id}>
        <Contact>
          {name}: {phone}
        </Contact>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactListItem;