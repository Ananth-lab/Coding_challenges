array = [-8, 2, 3, -6, 10];
k = 3;
let i = 0;
let j = 0;
let stack = [];
let result = [];
while(j < array.length){
    if(array[j] < 0){
        stack.push(array[j])
    }
    if(j - i + 1 < k){
        j += 1;
    }
    else{
        if(stack.length == 0){
            result.push(0)
        }
        else{
            result.push(stack[0])
            if(array[i] == stack[0]){
                stack.shift();
            }
        }
       
        j++;
        i++;
    }
}
console.log(result)
