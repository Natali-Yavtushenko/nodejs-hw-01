import fs from 'node:fs/promises';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

export const readContacts = async () => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
