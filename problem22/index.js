n = 10;
var myArray = new Array(n);
for ( var i =2; i < n; i++){
    myArray[i] = true;
}
for ( var i = 2 ; i < n; i++){
    if(myArray[i]){
        for(var j = i *2; j < n ; j += i){
            myArray[j] = false;
        }
    }
}
var newArray = [];
for ( var i = 0; i < n; i++){
    if(myArray[i]){
        newArray.push(i)
    }
}
console.log(newArray.length)
