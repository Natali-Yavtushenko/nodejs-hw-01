import fs from 'node:fs/promises';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(dbPath, JSON.stringify([]));
    console.log('Усі контакти успішно видалено.');
    return [];
  } catch (error) {
    console.error('Помилка під час видалення всіх контактів:', error);
    return null;
  }
};

removeAllContacts();
