function solution(binomial) {
    var bin = binomial.split(' ');
    if(bin[1]==='+') {
        return Number(bin[0])+ Number(bin[2]);
    } if(bin[1] ==='-') {
        return Number(bin[0]) - Number(bin[2]);
    } else {
        return Number(bin[0]) * Number(bin[2])
    }
}