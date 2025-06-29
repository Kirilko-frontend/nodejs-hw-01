import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    newContacts.push(newContact);
  }

  const updateContacts = contacts.concat(newContacts);

  await writeContacts(updateContacts);

  console.log(`Добавлено новых контактов ${number}`);
};

generateContacts(5);
