import React, { useState } from 'react';
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { notifyAddContacts, notifyCheckContacts } from 'services/notify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmitInput = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) return notifyCheckContacts(name);
    
    dispatch(addContact(name, number));
    notifyAddContacts(name);
    reset();
  };

  return (
    <Form onSubmit={onSubmitInput}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' -][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter contact name"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter contact number"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
