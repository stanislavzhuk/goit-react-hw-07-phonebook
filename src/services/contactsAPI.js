import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://648d76a12de8d0ea11e7ddef.mockapi.io/api/v1/',
});

export const fetchContacts = async () => {
  const { data } = await contactsAPI.get('contacts');
  // console.log('Received contacts:', data);
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsAPI.post('contacts', contact);
  // console.log('Contact added:', data);
  return data;
};

export const deleteContact = async id => {
  // console.log('Contact ID to delete:', id);
  const { data } = await contactsAPI.delete(`contacts/${id}`);
  // console.log('Contact deleted:', data);
  return data;
};