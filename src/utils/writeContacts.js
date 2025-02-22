import fs from 'node:fs/promises';
import path from 'node:path';

import { PATH_DB } from '../constants/contacts.js';

const dbPath = path.resolve(PATH_DB);

export const writeContacts = async (updatedContacts) => {
  const data = updatedContacts;
  try {
    await fs.writeFile(dbPath, data, 'utf-8');
  } catch (error) {
    console.error(error.message);
  }
};
