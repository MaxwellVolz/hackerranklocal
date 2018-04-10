'use strict';

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
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let sums = [],
        arrLength = arr.length;

    for (let value of arr) {

        sums.push(arr.reduce(reducer) - value)

        // sum+=value;
    }

    
    return Math.min(...sums) + " " + Math.max(...sums)


}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

   console.log( miniMaxSum(arr));
}


const correctAnswer = "10 14";
process.stdin.emit('data', "1 2 3 4 5");

process.stdin.emit('end');