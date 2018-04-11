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

function migratoryBirds(n, ar) {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let counts = {};

    for(let value of ar){
        if(counts[value] == undefined) 
            counts[value] = 1;
        else
            counts[value] += 1;
    }

    // let arr = Object.values(counts);
    let max = Math.max(...Object.values(counts));

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    let result = getKeyByValue(counts,max);

    console.log("result: " + result);

  
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    // process.stdout.write("" + result + "\n");

}


const correctAnswer = '4';
process.stdin.emit('data', "6");
process.stdin.emit('data', "\n");
process.stdin.emit('data', "1 4 4 4 5 3");

process.stdin.emit('end');
