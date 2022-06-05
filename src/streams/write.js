import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const __dirname = path.resolve(path.dirname(""));
const DIST = path.join(__dirname, '/src/streams/files/fileToWrite.txt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


export const write = async () => {

    const stream = rl.on('line', line => {
        line = line + '\n';
        fs.writeFile(DIST, line, { flag: 'a+' }, function (error) {
            if (error) throw error;
        });
    })

    process.stdin.pipe(stream);
};

write();