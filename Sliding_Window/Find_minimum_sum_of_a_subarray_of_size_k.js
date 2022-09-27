array = [10, 4, 2, 5, 6, 3, 8, 1];
k = 3;
let i = 0;
let sum = 0;
let j = 0;
let min = 100;
while(j < array.length){
sum += array[j]
    if(j - i + 1 < k){
        j += 1;
    }
    else{
        min = Math.min(sum, min);
        sum -= array[i];
        i += 1;
        j += 1;
    }
}

console.log(min)