nums = [2,7,11,15];
target = 9;
var my_map = new Map();
for (var i = 0; i < nums.length ; i++){
    var element = target - nums[i];
    if(my_map.has(element)){
        console.log([my_map.get(element) , i])
    }
    my_map.set(nums[i], i)
}