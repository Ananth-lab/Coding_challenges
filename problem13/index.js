arr = [1,4,2,5,3];
var sum = 0;
for ( var i = 0; i < arr.length; i ++){
    var s_array = [];
    for ( var j = i; j < arr.length; j++){
        s_array.push(arr[j]);
        if(s_array.length %2 != 0){
           var s_sum = 0;
            for( var k = 0;k <s_array.length; k++){
                s_sum = s_sum + s_array[k];         
            }
            sum = sum + s_sum
        }
    }  
}
console.log(sum)