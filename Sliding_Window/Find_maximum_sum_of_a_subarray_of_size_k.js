array = [1, 4, 2, 10, 23, 3, 1, 0, 20];
k = 4;
let i = 0;
let j = 0;
let max = array[0];
let sum = 0;
while(j < array.length){
    sum += array[j]
    if(j - i + 1 < k){
        j += 1;
        continue;
    }
    else{
        max = Math.max(max, sum);
        sum = sum - array[i];
        i += 1;
        j += 1;
    }
}

console.log(max)