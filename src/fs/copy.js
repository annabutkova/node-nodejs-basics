import * as fs from 'fs/promises';
import * as path from 'path';
const __dirname = path.resolve(path.dirname(""));
const SRC = path.join(__dirname, '/src/fs/files/');
const DEST_DIR = path.join(__dirname, '/src/fs/files-copy/');

export const copy = async () => {

    try {
        const files = await fs.readdir(SRC);

        return await fs.mkdir(DEST_DIR, { recursive: false })
            .then(copyFiles())
            .catch((error) => {
                console.log(error);
                console.error(new Error('FS operation failed'));
            })

        async function copyFiles() {
            for (const file of files) {
                fs.copyFile(`${SRC}/${file}`, `${DEST_DIR}/${file}`);
            }
        }

    }
    catch (error) {
        console.error(new Error('FS operation failed'));
    }


};

copy();
