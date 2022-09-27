s = "aabaabaa";
p = "aaba";
let k = p.length;
let i = 0;
let j = 0;
let sum = 0;
let map = new Map()
for(let i = 0; i < p.length; i++){
    map.set(p[i], map.get(p[i]) + 1 || 1)
}
map_length = map.size;
while(j < s.length){
    if(map.get(s[j]) != undefined){
        map.set(s[j], map.get(s[j]) - 1)
        if(map.get(s[j]) == 0){
            map_length -= 1;
        }
    }
    if(j - i + 1 < k){
        j += 1;
    }
   else  if(j - i + 1 == k){
        if(map_length == 0){
            sum += 1;
        }
        if(map.get(s[i]) != undefined){
            map.set(s[i], map.get(s[i])+1);
            if(map.get(s[i]) == 1){
            map_length += 1;
            }
        }
        i += 1;
        j += 1
    }
}

console.log(sum)