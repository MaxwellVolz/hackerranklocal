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

function kangaroo(x1, v1, x2, v2) {
    // Complete this function

    if(x1 == x2) return "YES";

    if((v1 == v2) || (x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) return "NO"

    return kangaroo(x1+v1,v1,x2+v2,v2);

    // Solved for the kangaroos being nice and waiting for the second on to catch up instead of continuing on solo forever
    // 
    // let kang = [x1,v1],
    //     roo = [x2,v2];

    // if(kang[0] == roo[0]){
    //     console.log("Yes");
    //     return 1;
    // }
    // if(kang[0] >= roo[0]){
    //     return kangaroo(roo[0]+roo[1],roo[1],kang[0],kang[1]);
        
    // }
    // else{
    //     return kangaroo(kang[0]+kang[1],kang[1],roo[0],roo[1]);
    // }
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}


const correctAnswer = 'YES';
process.stdin.emit('data', "43 2 70 2");


process.stdin.emit('end');
