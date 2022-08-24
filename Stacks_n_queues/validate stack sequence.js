pushed = [1,2,3,4,5];
popped = [4,5,3,2,1];
const temp  = [];
let j = 0;   
for(let i = 0; i < pushed.length; i++) {
    let top = pushed[i]; 
    temp.push(top);
    while(popped[j] == top && j < popped.length ) {
        temp.pop();
        j=j+1;
        top = temp[temp.length-1];
    }
}
if(temp.length == 0){
console.log("True")
}
else{
console.log("False")
}