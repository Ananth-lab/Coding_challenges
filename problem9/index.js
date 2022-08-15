n = [1,4,3,5,6,8,34,876,4546,4577,34567,234]
var max = n[0];
for(var i = 0; i < n.length; i++){
    if(n[i]>max){
        max = n[i];
    }
}
console.log(max)