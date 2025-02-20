import fs from 'node:fs/promises';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

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
