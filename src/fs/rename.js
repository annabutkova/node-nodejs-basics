import * as fs from 'node:fs/promises';
import * as path from 'path';
const __dirname = path.resolve(path.dirname(""));
const OLD = path.join(__dirname, '/src/fs/files/wrongFilename.txt');
const NEW = path.join(__dirname, '/src/fs/files/properFilename.md');


 
export const rename = async () => {
    try {
        await fs.rename(OLD, NEW);
      } catch (error) {
        console.error(new Error('FS operation failed'));
      }
};

rename();