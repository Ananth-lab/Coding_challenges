n = [1,4,5,6,2,3,5,4,6,2,1]
xor = 0;
for (var i = 0;i < n.length; i++){
    xor = xor ^ n[i]
}
console.log(`The number which does not has duplicates in ${xor}`)