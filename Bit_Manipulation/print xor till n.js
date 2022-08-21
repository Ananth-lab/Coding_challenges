n = 589;
var xor = 0;
for ( i = 1; i <= n; i++){
    xor = xor ^ i;
}
console.log(xor)

///above method has O(n) ---> time complexity

// if we try to undesrstand the patterns
// N     final xor           pattern
// 0       0                n % 4 == 0---------------------print n
// 1       1                n % 4 == 1 --------------------print 1
// 2       3                n % 4 == 2---------------------print n +1
// 3       0                n % 4 == 3---------------------print 0;
// 4       4                n % 4 == 0---------------------print n
// 5       1
// 6       7
// 7       0
// 8       8
// 9       1
// 10      11
// 11      0
// 12      12

////if we write code to solve the problem in O(n time complexity)

n = 589;
if(n % 4 == 0){
    console.log(n)
}
else if(n % 4 == 1){
    console.log(1)
}
else if(n % 4 == 2){
    console.log(n+1)
}
else if(n % 4 == 3){
    console.log(0)
}