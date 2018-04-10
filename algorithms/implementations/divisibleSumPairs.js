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

function divisibleSumPairs(n, k, ar) {
    // Complete this function
    let wins = 0;

    for( const [index,value] of ar.entries()){

        let startPoint = index+1;

        while(startPoint < n){

            let sum = value + ar[startPoint];

            if(sum % k === 0) 
               ++wins
            ++startPoint;
        }

        // console.log(index,value);
    }

    return wins

    // variable % k === 0  

}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(n, k, ar);
    process.stdout.write("" + result + "\n");

    console.log(result);
    console.log(result == correctAnswer ? "Success!" : "Expected: " + correctAnswer);
    
}


const correctAnswer = "5";
process.stdin.emit('data', "6 3");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "1 3 2 6 1 2");


process.stdin.emit('end');