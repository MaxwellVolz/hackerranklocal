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

function countingValleys(n, s) {
    // Complete this function
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = countingValleys(n, s);
    process.stdout.write("" + result + "\n");

}

const correctAnswer = '1';
process.stdin.emit('data', "8");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "UDDDUDUU");


process.stdin.emit('end');