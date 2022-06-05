import * as fs from 'fs/promises';
import * as path from 'path';
const __dirname = path.resolve(path.dirname(""));
const SRC = path.join(__dirname, '/src/fs/files/');

export const list = async () => {
    try {
        const files = await fs.readdir(SRC);
        for (const file of files) {
            console.log(file);
        }
    }
    catch (error) {
        console.error(new Error('FS operation failed'));
    }
};

list();