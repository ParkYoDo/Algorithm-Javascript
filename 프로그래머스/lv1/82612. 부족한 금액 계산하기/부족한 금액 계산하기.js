function solution(price, money, count) {

    return ((price +price*count )*count/2)-money>0?((price +price*count )*count/2)-money:0;
}