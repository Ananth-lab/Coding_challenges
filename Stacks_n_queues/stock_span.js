prices = [100,80,60,70,60,75,85];
let stack = [];
let final = [];
let count = 1;
for(let i = 0; i < prices.length; i++){
    while(stack.length != 0){
        if(prices[stack[stack.length-1]]>prices[i]){
            final.push(i-(stack[stack.length -1]));
            break;
        }
        else{
            stack.pop()
        }
    }
    if(stack.length == 0){
        final.push(1)
    }
    stack.push(i)
}
console.log(final)