import { writeFile } from 'fs/promises';
import * as path from 'path';
const __dirname = path.resolve(path.dirname(""));
const absolutePath = path.join(__dirname, '/src/fs/files/', 'fresh.txt');
const text = 'I am fresh and young';

export const create = async () => {

    try {
        await writeFile(absolutePath, text, { flag: 'wx' })
    } catch (error) {
        if(error.code == 'EEXIST'){
            console.error(new Error('FS operation failed'));
        } else {
            console.error(new Error('FS operation failed'));
        }
    }

}
create();