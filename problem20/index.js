arr = [4,3,2,2,4,1,3,4,3]; 
var my_map = new Map()
luckyValue = -1;
arr.forEach(element => {
    my_map.set(element ,(my_map.get(element)+1) || 1);
})
for(var [key, value] of my_map){
    if(key == value){
        if(luckyValue<value){
        luckyValue = value;
        }
    }
}
console.log(luckyValue);