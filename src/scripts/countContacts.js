import fs from 'fs/promises';
import path from 'node:path';

import { PATH_DB } from '../constants/contacts.js';

const dbPath = path.resolve(PATH_DB);

export const countContacts = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('Файл бази даних не містить масиву контактів');
    }
    return contacts.length;
  } catch (error) {
    console.error('Помилка під час підрахунку контактів:', error.message);
    return 0;
  }
};

console.log(await countContacts());
