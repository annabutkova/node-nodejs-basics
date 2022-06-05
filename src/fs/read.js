import * as fs from 'fs/promises';
import * as path from 'path';
const __dirname = path.resolve(path.dirname(""));
const SRC = path.join(__dirname, '/src/fs/files/fileToRead.txt');


export const read = async () => {
    try {
        const text = await fs.readFile(SRC);
        console.log(text.toString());
    }
    catch (error) {
        console.error(new Error('FS operation failed'));
    }
};

read();