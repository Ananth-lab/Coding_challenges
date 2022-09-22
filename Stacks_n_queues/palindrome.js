var isPalindrome = function(s) {
    var n ="";
    var reverse = "";
    const regex = /[A-Za-z0-9]/gi
    const found = s.match(regex)
    if(found!=null){
    for (var i = 0; i< found.length;i++){
      n=n + found[i];
      m = n.toLowerCase();
    }
    
    for (var i = m.length-1; i>=0; i--){
        reverse = reverse + m[i]
    }
    if(m == reverse){
        return true
    }
    else{
       return false;
    }
    } 
     else{
        return true;
    }
    };
    console.log(isPalindrome("A man, a plan, a canal: Panama"))