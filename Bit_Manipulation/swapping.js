//Swapping two numbers

a = 10;
b = 20;
a = a^b;   ///a^b
b = a^b;   ///a^b^b-----------------b will get cancelled a remains
a = a^b;   ///a^a^b-----------------a gets cancelled and b remains
console.log(a);
console.log(b);