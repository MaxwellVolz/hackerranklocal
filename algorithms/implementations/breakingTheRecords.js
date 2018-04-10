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
 * Complete the breakingRecords function below.
 */
function breakingRecords(score) {
    /*
     * Write your code here.
     */
    
    let newLow = score[0],
        newHigh = score[0],
        lows = 0,
        highs = 0;

    for(let value of score){
        if(value < newLow) 
            (newLow = value, ++lows)

        if(value > newHigh) 
            (newHigh = value, ++highs)
    }
    return [highs, lows]

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const score = readLine().split(' ').map(scoreTemp => parseInt(scoreTemp, 10));

    let result = breakingRecords(score);

    // ws.write(result.join(" ") + "\n");

    // ws.end();
    console.log(result);
    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);
    
}



const correctAnswer = "2 4";
process.stdin.emit('data', "9");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "10 5 20 20 4 5 2 25 1");

process.stdin.emit('end');