dividend = 100;
divisor = 10;

if(dividend == 1<<31 && divisor == -1) return Number.MAX_VALUE;
        
var sign = (dividend>=0) == (divisor >=0) ? true : false;

dividend = Math.abs(dividend);
divisor = Math.abs(divisor);
var result=0;
while(dividend - divisor >= 0 ){
    var count=0;
    while(dividend  - (divisor << 1 << count) >= 0 ){
        count++;
    } 
    result += 1 << count;
    dividend -= divisor << count ;
}
return sign?console.log(result): console.log(-result) ;
