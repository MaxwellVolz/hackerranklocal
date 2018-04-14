'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the catAndMouse function below.
 */
function catAndMouse(x, y, z) {
    /*
     * Write your code here.
     */

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().split(' ');

        const x = parseInt(xyz[0], 10);

        const y = parseInt(xyz[1], 10);

        const z = parseInt(xyz[2], 10);

        let result = catAndMouse(x, y, z);

        ws.write(result + "\n");
    }

    ws.end();
}

const correctAnswer = 'Cat B Mouse C';
process.stdin.emit('data', "2");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "1 2 3");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "1 3 2");

process.stdin.emit('end');