import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { notifyDeleteContact } from 'services/notify';
import { Item, Button, Contact } from './ContactListItem.styled';
import { deleteContactsThunk } from 'redux/contactsThunk';

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
    dispatch(deleteContactsThunk(id));
    notifyDeleteContact();
  };

  return filtredContacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <Contact>
          {name}: {number}
        </Contact>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactListItem;