n = 153;
var m = n;
var count = 0;
while(n > 0){
    var rem = n % 10;
    n = Math.floor(n/10);
    count = count + Math.pow(rem,3);
}
if(count == m){
    console.log("True")
}
else{
    console.log("False")
}