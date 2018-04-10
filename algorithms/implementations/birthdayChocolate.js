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

function solve(n, s, d, m){
    // Complete this function

    // n is squares in bar
    // s is bar values

    // d is sum
    // m is length of bar
    let len = 0,
        piecesForRon = 0;

    while(len < n){

        let temp = s.slice(len,m+len),
            sum = 0;

        for(let value of temp){
            sum += value;
        }

        if(sum == d) ++piecesForRon
        

        ++len
    }
    
    return piecesForRon
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

    console.log(result);
    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);
    
}


const correctAnswer = "2";
process.stdin.emit('data', "5");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "1 2 1 3 2");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "3 2");

process.stdin.emit('end');