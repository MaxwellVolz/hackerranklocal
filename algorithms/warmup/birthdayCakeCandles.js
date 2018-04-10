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
 * Complete the birthdayCakeCandles function below.
 */
function birthdayCakeCandles(n, ar) {
    /*
     * Write your code here.
     */

    let m = Math.max(...ar);

    return ar.filter(v => v >= m).length;

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(n, ar);

    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);

    // ws.write(result + "\n");

    // ws.end();
}


const correctAnswer = "2";
process.stdin.emit('data', "4");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "3 2 1 3");

process.stdin.emit('end');