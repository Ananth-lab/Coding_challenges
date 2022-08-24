s = "3[ac2[c]]";
let str = "";
let final_str = "";
let iterations = [];
let storing = [];
for(let i = 0; i < s.length; i++){
  let current = s[i];
  if(!isNaN(current)){
    str = str + current;
  }
  else if(current == "["){
    iterations.push(str);
    storing.push(final_str);
    str = "";
    final_str = "";
  }
  else if(current == "]"){
    final_str = storing.pop() + final_str.repeat(iterations.pop());
  }
  else{
    final_str += current;
  }
}
console.log(final_str)