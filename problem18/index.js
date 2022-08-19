nums = [4,5,6,7,0,1,2];
target = 2;
var number = nums[0];
for ( var i = 0; i < nums.length; i++){
    if(nums[i] < number){
        number = nums[i];
        min = i;
    }
}
var l = 0;
var h = min;
while(l <= h){
    var mid = Math.floor((l + h)/2);
    if(target == nums[mid]){
        console.log(`Element found at ${mid} position`);
        break;
    }
    else if(target > nums[mid]){
        l = mid + 1;
    }
    else if(target < nums[mid]){
        h = mid - 1;
    }
}

var l = min-1;
var h = nums.length-1;
while(l <= h){
    var mid = Math.floor((l + h)/2);
    if(target == nums[mid]){
        console.log(`Element found at ${mid} position`);
        break;
    }
    else if(target > nums[mid]){
        l = mid + 1;
    }
    else if(target < nums[mid]){
        h = mid - 1;
    }
}