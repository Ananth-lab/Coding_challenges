s = "()[([])]";
var stack = [];
for ( var i = 0; i < s.length; i++){
    var a = s[i];
    if(a == "(" || a == "[" || a == "{"){
        stack.push(a);
    }
    else if((a == ")" && stack[stack.length-1] == "(") || ( a == "]" && stack[stack.length-1] == "[") || (a == "}" && stack[stack.length-1] == "{")){
        stack.pop();
    }
    else{
        break;
    }
}
if(stack.length == 0){
    console.log("True")
}
else{
    console.log("False")
}