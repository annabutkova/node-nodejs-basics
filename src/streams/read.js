import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const __dirname = path.resolve(path.dirname(""));
const SRC = path.join(__dirname, '/src/streams/files/fileToRead.txt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const read = async () => {
    const stream = fs.createReadStream(SRC);

    stream.on('data', function (chunk) {
        chunk.toString();
    });
    stream.pipe(process.stdout);

};

read();