import fs from 'node:fs/promises';
import path from 'node:path';

import { PATH_DB } from '../constants/contacts.js';

const dbPath = path.resolve(PATH_DB);

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      return;
    }

    const removedContact = contacts.pop();

    await fs.writeFile(dbPath, JSON.stringify(contacts, null, 2));
    console.log(removedContact);
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
