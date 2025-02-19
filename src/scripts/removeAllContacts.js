import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.unlink(PATH_DB);
    console.log('Файл успішно видалено.');
  } catch (error) {
    console.error('Помилка видалення файлу:', error);
  }
};

removeAllContacts();
