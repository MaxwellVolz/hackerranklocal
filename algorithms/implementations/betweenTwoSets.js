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
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */

    

     console.log("not understanding this one yet");

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    // ws.write(total + "\n");

    // ws.end();



    console.log(total == correctAnswer ? "Success!" : "Expected: " + correctAnswer);
    
}


const correctAnswer = "3";
process.stdin.emit('data', "2 3");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "2 4");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "16 32 96");

process.stdin.emit('end');