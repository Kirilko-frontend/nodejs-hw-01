import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  const updateContacts = [...contacts, newContact];
  await writeContacts(updateContacts);
  console.log('Добавлен новый контакт:', newContact.name);
};

addOneContact();
