array = [1,3,4,6,7,4];
//[-1,-1,-1,4,4,-1]
let stack = [];
let NSR = [];

for(let i = array.length-1; i >= 0; i--){
    while(stack.length != 0){
        if(stack[stack.length - 1] < array[i]){
            NSR.push(stack[stack.length - 1]);
            break;
        }
        else{
            stack.pop();
        }
    }
    if(stack.length == 0){
        NSR.push(-1)
    }
    stack.push(array[i])
}

console.log(NSR.reverse())