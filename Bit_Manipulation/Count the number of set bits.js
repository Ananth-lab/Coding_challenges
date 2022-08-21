n= 187545;
console.log(n.toString(2));
var count = 0;
while(n !=0){
    n = (n & n-1);
    count = count + 1;
}
console.log(count);