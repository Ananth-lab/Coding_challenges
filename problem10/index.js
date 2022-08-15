n = [1,2,3,4,5];

for (var i = 0;i<n.length;i++){
    str = "";
    for (var j=i; j<n.length;j++){
        str=str + n[j];
        console.log(str)
    }
    
}