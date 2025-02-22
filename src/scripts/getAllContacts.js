import fs from 'node:fs/promises';
import path from 'node:path';

import { PATH_DB } from '../constants/contacts.js';

const dbPath = path.resolve(PATH_DB);

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error.message);
    return [];
  }
};

console.log(await getAllContacts());
