const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var array = Array(Number(input[0])).fill(0);
    array.map((_,i)=> console.log('*'.repeat(i+1)));
});