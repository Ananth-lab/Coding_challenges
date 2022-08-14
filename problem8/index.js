for(var i = 1; i <=5; i++){
    var star = "";
    for(var j = 0;j<=i-1 ; j++)
    {
        star = star + "*";
    }
    for (var j = 0;j <(-i+5);j++){
        star = star + " ";
    }
    for(var j = 0;j<=i-1 ; j++)
    {
        star = star + "*";
    }
    console.log(star)
}