function solution(price) {
    var result;
 if(price>= 500000) {
     result = 0.8*price;
 } else if (price>=300000) {
     result = 0.9*price;
 } else if (price >=100000) {
     result = 0.95*price;
 }  else return price;
    return ~~(result);
    
}