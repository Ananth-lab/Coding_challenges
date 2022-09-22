heights =  [2,1,5,6,2,3]
let NSR =[];
let final_NSR;
let final_NSL = [];
let stack = [];
let max_area = 0;
for(let i = 0; i < heights.length; i++){
    while(stack.length != 0){
        if(heights[stack[stack.length -1]] < heights[i]){
            final_NSL.push(stack[stack.length - 1]);
            break;
        }
        else{
            stack.pop();
        }
    }
    if(stack.length == 0){
        final_NSL.push(-1)
    }
    stack.push(i)
}

stack = [];
for(let i = heights.length -1; i >= 0 ; i--){
    while(stack.length != 0){
        if(heights[stack[stack.length - 1]] < heights[i]){
            NSR.push(stack[stack.length - 1]);
            break;
        }else{
            stack.pop()
        }
    }
    if(stack.length == 0){
        NSR.push(heights.length);
    }
    stack.push(i)
}
final_NSR = NSR.reverse()
console.log(final_NSL)
console.log(final_NSR)

for(let i = 0; i < heights.length; i++){
    let width = final_NSR[i] - final_NSL[i] - 1;
    let area = width * heights[i];
    if(area > max_area){
        max_area = area;
    }
}
console.log(max_area)

