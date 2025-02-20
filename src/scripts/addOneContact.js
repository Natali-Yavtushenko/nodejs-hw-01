import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2));

    console.log('Новий контакт успішно додано:', newContact);
  } catch (error) {
    console.error('Помилка під час додавання контакту:', error.message);
  }
};

addOneContact();
