n = 34567;
i = 2;
console.log(n.toString(2))
var mask = 1 << i;
if((mask&n)!=0){
    console.log("its a set bit")
}
else{
    console.log("Its not a set bit")
}
