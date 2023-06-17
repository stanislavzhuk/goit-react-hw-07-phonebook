import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { notifyDeleteContact } from 'services/notify';
import { Item, Button, Contact } from './ContactListItem.styled';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterByName = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = filterByName(normalizedFilter);

  const onDelete = (id) => {
    dispatch(deleteContact(id));
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