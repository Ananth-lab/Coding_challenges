array = [1,3,4,6,7,4];
let NGR = [];
let stack = [];
for(let i = array.length -1; i >= 0 ; i--){
    while(stack.length != 0){
        if(stack[stack.length - 1] > array[i]){
            NGR.push(stack[stack.length - 1]);
            break;
        }else{
            stack.pop()
        }
    }
    if(stack.length == 0){
        NGR.push(-1);
    }
    stack.push(array[i])
}

console.log(NGR.reverse())



