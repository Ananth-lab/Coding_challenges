nums = [1,2,1,3,5,6,4];
var l = 0;
var h = nums.length -1;
while(l<=h){
    var m = Math.floor((l+h)/2);
    if(nums[m]>nums[m-1] && nums[m]>nums[m+1]){
       console.log(m);
       break;
    }
    else if(nums[m-1] > nums[m]){
        h = m-1;
    }
    else if(nums[m+1] > nums[m]){
        l = m + 1;
    }
}

