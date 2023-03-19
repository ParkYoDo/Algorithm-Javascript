function solution(hp) {
    var answer = 0;
    var hpp=hp;
    
    if(hpp=>5) {
        answer += parseInt(hpp/5);
        hpp = hpp%5;
    }  if (hpp=>3) {
        answer += parseInt(hpp/3);
        hpp = hpp%3;
    }  if(hpp=>1){
        answer += hpp;
        
    }
        
        

    return answer;
}