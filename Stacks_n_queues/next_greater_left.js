array = [1,3,4,6,7,4];
//[-1,-1,-1,-1,-1,7];
let stack = [];
let NGL = [];
for(let i = 0; i < array.length; i++){
    while(stack.length != 0){
        if(stack[stack.length -1] > array[i]){
            NGL.push(stack[stack.length -1]);
            break;
        }
        else{
            stack.pop();
        }
    }
    if(stack.length == 0){
        NGL.push(-1)
    }
    stack.push(array[i])
}
console.log(NGL)