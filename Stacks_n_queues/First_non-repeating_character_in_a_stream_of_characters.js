A = "jyhrcwuengcbnuchctluxjgtxqtfvrebveewgasluuwooupcyxwgl";
let stack = [];
let map = new Map();
let B = "";
for(let i = 0; i < A.length; i++){
    map.set(A[i], map.get(A[i]) + 1 || 1)
    stack.push(A[i]);
    while(map.has(stack[0]) && map.get(stack[0]) >1){
        if(stack.length != 0){
            stack.shift();
        }
        else{
            break;
        }
    }

    if(stack.length == 0){
        B += "#"
    }
    else{
        B = B + stack[0]
    }
}

console.log(B)

