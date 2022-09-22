array = [1,3,4,6,7,4];
//[-1,1,3,4,6,3]
let stack = [];
let NSL = [];
for(let i = 0; i < array.length; i++){
    while(stack.length != 0){
        if(stack[stack.length - 1] < array[i]){
            NSL.push(stack[stack.length - 1]);
            break;
        }
        else{
            stack.pop()
        }
    }
    if(stack.length == 0){
        NSL.push(-1)
    }
    stack.push(array[i])
}
console.log(NSL)