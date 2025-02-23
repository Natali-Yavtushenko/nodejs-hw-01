import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log('Новий контакт успішно додано:', newContact);
  } catch (error) {
    console.error('Помилка під час додавання контакту:', error.message);
  }
};

addOneContact();
