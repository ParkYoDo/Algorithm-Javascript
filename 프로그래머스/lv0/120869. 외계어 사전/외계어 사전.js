function solution(spell, dic) {
    var sortSpell = spell.sort().join('');
    return dic.filter((word)=>word.split('').sort().join('')===sortSpell).length?1:2;
}