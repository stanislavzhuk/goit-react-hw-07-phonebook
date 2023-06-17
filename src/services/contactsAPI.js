import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://648d76a12de8d0ea11e7ddef.mockapi.io/api/v1/',
});

export const getContacts = async () => {
  const { data } = await contactsAPI.get('contacts');
  console.log('Отримані контакти:', data);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactsAPI.post('contacts', contact);
  console.log('Доданий контакт:', data);
  return data;
};

export const deleteContacts = async id => {
  console.log('ID контакту для видалення:', id);
  const { data } = await contactsAPI.delete(`contacts/${id}`);
  console.log('Видалений контакт:', data);
  return data;
};