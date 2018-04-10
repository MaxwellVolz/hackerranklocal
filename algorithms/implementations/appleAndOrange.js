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
 * Complete the countApplesAndOranges function below.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    /*
     * Write your code here.
     */

    //  s,t sides of house
    //  a,b kids in trees
    //  apples distance thrown list
    //  oranges distance thrown list

    let larryScore = 0,
        robScore = 0;


    for (let value of apples) {
        if( value + a >= s && value + a <= t) ++larryScore;
        
    }

    for (let value of oranges) {
        if( value + b >= s && value + b <= t) ++robScore;
    }


    console.log(larryScore + " " + robScore);



}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apple = readLine().split(' ').map(appleTemp => parseInt(appleTemp, 10));

    const orange = readLine().split(' ').map(orangeTemp => parseInt(orangeTemp, 10));

    countApplesAndOranges(s, t, a, b, apple, orange);

    let result = countApplesAndOranges(s, t, a, b, apple, orange);


    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);
    
}



const correctAnswer = '1 1';
process.stdin.emit('data', "7 11");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "5 15");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "3 2");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "-2 2 1");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "5 -6");

process.stdin.emit('end');