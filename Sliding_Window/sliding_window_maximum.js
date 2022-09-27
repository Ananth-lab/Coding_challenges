var maxSlidingWindow = function(nums, k) {
let i = 0;
let j = 0;
let max = [];
let stack = [];
while(j < nums.length){
    while(stack.length != 0 && stack[stack.length - 1] < nums[j]){
        stack.pop()
    }
    stack.push(nums[j])
    if(j - i + 1 < k){
        j += 1;
    }
    else if(j - i + 1 == k){
        if(nums[i] == stack[0]){
            max.push(stack.shift())
        }
        else{
            max.push(stack[0])
        }
        j += 1 ;
        i +=1;
    }
}
        return max;
};


console.log(maxSlidingWindow([1,2,4,1,3,5,-1,-5,1,3,5],3))