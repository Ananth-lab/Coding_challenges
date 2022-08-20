jewels = "aA";
stones = "aAAbbbb";
var myMap = new Map()
console.log(jewels[1])
for(var element of jewels){
    myMap.set(element, myMap.get(element)+1 || 1)
}
console.log(myMap);
var count = 0;
for(var element of stones){
    if(myMap.has(element)){
    myMap.set(element, myMap.get(element)+1 || 1)
    count = count + 1
}
}
console.log(myMap)
console.log(count)