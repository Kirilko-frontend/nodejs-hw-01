import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};

const count = await countContacts();
console.log(`Количество контактов ${count}`);
