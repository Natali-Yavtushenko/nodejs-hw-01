import fs from 'fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import path from 'node:path';

import { PATH_DB } from '../constants/contacts.js';

const dbPath = path.resolve(PATH_DB);

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updateContacts = [...contacts, ...newContacts];

    await fs.writeFile(dbPath, JSON.stringify(updateContacts, null, 2));

    console.log(`Успішно додано ${number} контактів!`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error.message);
  }
};
export default generateContacts;
generateContacts(5);
