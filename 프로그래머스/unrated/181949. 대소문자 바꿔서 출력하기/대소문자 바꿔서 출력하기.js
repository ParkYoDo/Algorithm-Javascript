const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const result = [...str].map((a)=>a.toUpperCase()===a ? a.toLowerCase() : a.toUpperCase()).join('')
    console.log(result)
    
});