n = [4,3,2,5,1];
for (var i = 0; i < n.length; i++){
    for(var j = 1; j < n.length ; j++){
        if(n[j]>n[j-1]){
            var temp = n[j];
            n[j] = n[j-1] ;
            n[j-1] = temp; 
        }
    }
}
console.log(n)
