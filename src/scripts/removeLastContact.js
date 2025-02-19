import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      return;
    }

    const removedContact = contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(removedContact);
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
