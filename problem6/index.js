n = 789;
var rev = "";
while(n > 0){
    rem = n % 10;
    n = Math.floor(n/10);
    rev = (rev*10 )+ rem;
}
console.log(rev);