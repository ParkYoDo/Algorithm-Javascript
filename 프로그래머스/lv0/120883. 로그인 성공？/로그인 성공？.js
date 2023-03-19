function solution(id_pw, db) {
if(db.find((a)=>a[0]===id_pw[0]&&a[1]===id_pw[1])){return 'login';}
    else if(db.find((a)=>a[0]===id_pw[0]&&a[1]!==id_pw[1])) {
        return 'wrong pw';
    }else return 'fail';
    
}