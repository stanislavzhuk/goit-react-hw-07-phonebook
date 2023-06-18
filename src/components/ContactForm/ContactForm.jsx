import React, { useState } from 'react';
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { notifyAddContacts, notifyCheckContacts } from 'services/notify';
import { addContactThunk } from 'redux/contactsThunk';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
    
    dispatch(addContactThunk({ name, phone: number }));
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
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
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
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
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
