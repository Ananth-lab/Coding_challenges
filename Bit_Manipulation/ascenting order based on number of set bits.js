const arr = [1024,1,2,3,75,5,6,7,8];
var arra = new Array()
for (var i = 0; i < arr.length ; i++){
    count = 0;
    var n = arr[i]
    while(n != 0){
    n = n & n-1;
    count=count +1;
}
arra.push([arr[i],count])
}
console.log(arra)   
arra.sort(function (a,b){
    return a[1] - b[1];
})
console.log(arra)
var fArray = [];
for (var i = 0; i < arra.length; i++){
    fArray.push(arra[i][0])
}
console.log(fArray)