import fs from 'node:fs/promises';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

export const writeContacts = async (updatedContacts) => {
  const data = updatedContacts;
  try {
    await fs.writeFile(dbPath, data, 'utf-8');
  } catch (error) {
    console.error(error.message);
  }
};
