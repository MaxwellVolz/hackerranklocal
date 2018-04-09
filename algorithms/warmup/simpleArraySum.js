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
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = 0;
    for (let value of ar) {
        sum+=value;
      }
      
     return sum
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUTTEST);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    console.log("Answer: " + result);
    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);

    // ws.write(result + "\n");

    // ws.end();
}


const correctAnswer = '31';
process.stdin.emit('data', "6");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "1 2 3 4 10 11");

process.stdin.emit('end');