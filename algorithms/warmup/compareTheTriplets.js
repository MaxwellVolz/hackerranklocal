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
 * Complete the solve function below.
 */
function solve(a0, a1, a2, b0, b1, b2) {

    let a = 0,b = 0;

    if (a0 > b0){
        ++a;
    } 
    else if(b0 > a0){
        ++b;
    }

    if (a1 > b1){
        ++a;
    } 
    else if(b1 > a1){
        ++b;
    }

    if (a2 > b2){
        ++a;
    } 
    else if(b2 > a2){
        ++b;
    }

    
    return a + " " + b

    /*
     * Write your code here.
     */

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a0A1A2 = readLine().split(' ');

    const a0 = parseInt(a0A1A2[0], 10);

    const a1 = parseInt(a0A1A2[1], 10);

    const a2 = parseInt(a0A1A2[2], 10);

    const b0B1B2 = readLine().split(' ');

    const b0 = parseInt(b0B1B2[0], 10);

    const b1 = parseInt(b0B1B2[1], 10);

    const b2 = parseInt(b0B1B2[2], 10);

    let result = solve(a0, a1, a2, b0, b1, b2);

    console.log("Answer: " + result);
    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);

    // ws.write(result.join(" ") + "\n");

    // ws.end();
}


const correctAnswer = "1 1";
process.stdin.emit('data', "5 6 7");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "3 6 10");

process.stdin.emit('end');