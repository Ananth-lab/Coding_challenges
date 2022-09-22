height = [4,2,0,3,2,5];

let left =[];
let right_max = [];
let right;
let stack = [];
let trapped_water = 0;
for(let i = 0; i < height.length; i++){
    if(stack.length == 0){
        stack.push(height[i])
    }
    else if(stack[stack.length -1]<height[i]){
        stack[stack.length -1] = height[i]
    }
    left.push(stack[stack.length -1])
}

stack= [];
for(let i = height.length-1; i >= 0; i--){
    if(stack.length ==0){
        stack.push(height[i])
    }
    else if(stack[stack.length -1] < height[i]){
        stack[stack.length -1] =  height[i]
    }
    right_max.push(stack[stack.length -1])
}
right = right_max.reverse()


for ( let i = 0; i < height.length; i++){
    let level = Math.min(left[i], right[i]);
    trapped_water += level - height[i]
}

console.log(trapped_water)