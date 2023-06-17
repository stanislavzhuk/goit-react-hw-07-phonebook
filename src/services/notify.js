import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  borderRadius: '10px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

export const notifyAddContacts = name => Notify.success(`${name} has been successfully added to the contact list`);

export const notifyCheckContacts = name => Notify.info(`${name} is already in contacts`);

export const notifyDeleteContact = () => Notify.success("Contact deleted successfully!");
