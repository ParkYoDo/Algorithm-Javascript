process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const array = Array(b).fill(null);
    array.map((_)=> console.log('*'.repeat(a)))
   
});