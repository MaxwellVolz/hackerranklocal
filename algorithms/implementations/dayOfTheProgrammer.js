process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(year){
    // Complete this function
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}

const correctAnswer = '5';
process.stdin.emit('data', "4 1");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "3 10 2 9");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "12");

// const correctAnswer = 'Bon Appetit';
// process.stdin.emit('data', "4 1");
// process.stdin.emit('data', "\n");
// process.stdin.emit('data', "3 10 2 9");
// process.stdin.emit('data', "\n");
// process.stdin.emit('data', "7");

process.stdin.emit('end');