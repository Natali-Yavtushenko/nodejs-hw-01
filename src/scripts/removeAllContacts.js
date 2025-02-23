import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Усі контакти успішно видалено.');
    return [];
  } catch (error) {
    console.error('Помилка під час видалення всіх контактів:', error);
    return null;
  }
};

removeAllContacts();
