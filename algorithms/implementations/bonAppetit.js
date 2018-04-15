process.stdin.resume();
process.stdin.setEncoding("ascii");

// rewrote beginning to match others / more efficient start
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

function solve(n, s, d){

	// n - index of food Anna isnt eating
	// s - array of food items
	// d - amount Brian charged Anna


	let ogSum = s.reduce((a, b) => a + b, 0);

	s.splice(n,1);

	let newSum = s.reduce((a,b) => a + b, 0)/2;

	if(newSum < d)
		return d - newSum
	else
		return 'Bon Appetit';
	console.log("hey");
	console.log("n: " + n + ", s: " + s + ", d: " + d);

	return n
}

function main() {

    let n = parseInt(readLine().split(' ')[1]);
    s = readLine().split(' ');
    s = s.map(Number);
    let d = parseInt(readLine());
    let result = solve(n, s, d);
    process.stdout.write(""+result+"\n");

}

let correctAnswer = '5';
process.stdin.emit('data','4 1');
process.stdin.emit('data','\n');
process.stdin.emit('data','3 10 2 9');
process.stdin.emit('data','\n');
process.stdin.emit('data','7');
process.stdin.emit('end');
