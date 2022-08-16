nums = [-1,0,3,5,9,12];
target = 9;
var l = 0;
var h = nums.length-1;
while(l <= h){
    var m = Math.floor((l +h)/2);
    if (target  == nums[m]){
        console.log(`Hi, I have found your element in ${m} position`);
        break;
    }
    else if(target < nums[m]){
        h = m-1;
    }
    else if(target > nums[m]){
        l = m+1;
    }
}
if(l > h){
    console.log("Sorrry. Element not found")
}