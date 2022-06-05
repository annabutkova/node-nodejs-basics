import * as fs from 'node:fs/promises';
import * as path from 'path';
const __dirname = path.resolve(path.dirname(""));
const file = path.join(__dirname, '/src/fs/files/fileToRemove.txt');

export const remove = async () => {
    try {
        await fs.unlink(file);
    } catch (error) {
        console.error(new Error('FS operation failed'));
    }
};

remove();