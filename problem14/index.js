nums = [1,2,3,4,5,6,7];
k = 3;
var l = 0;
k = k % nums.length;
var h = nums.length -k -1;
while(l<h){
  var temp = nums[l];
  nums[l] = nums[h];
  nums[h] = temp;
  l = l+1;
  h = h-1;
}
l = nums.length - k ;
h = nums.length -1;
while(l<h){
  temp = nums[l];
  nums[l] = nums[h];
  nums[h] = temp;
  l = l+1;
  h = h-1;
}
l = 0;
h = nums.length -1;
while(l<h){
  temp = nums[l];
  nums[l] = nums[h];
  nums[h] = temp;
  l = l+1;
  h = h-1;
}
    console.log(nums);