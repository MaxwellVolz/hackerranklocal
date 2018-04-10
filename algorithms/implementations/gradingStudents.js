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
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
        // console.log(grades);
        let newGrades = [];
        
        for (let value of grades) {

            if(value < 38){
                newGrades.push(value);
                continue;
            } 

            let roundUp = (Math.round(value / 5) * 5);

            console.log("round: " + roundUp + " | value: " + value);

            (roundUp > value && roundUp - value < 3) ? newGrades.push(roundUp): newGrades.push(value);


        }

        console.log(newGrades);
        // console.log(grades.map(v => Math.round(v / 5) * 5));


}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);
    

    // ws.write(result.join("\n") + "\n");

    // ws.end();
}


const correctAnswer = '75 67 40 33';
process.stdin.emit('data', "4");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "73");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "67");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "38");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "33");

process.stdin.emit('end');

// main();
