import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = updatedContacts;
  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error(error.message);
  }
};
