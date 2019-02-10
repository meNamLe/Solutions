var isPalindrome = function(x) {
    /*
      Heres the question in my own words
      
        if the integer is a palindrome return true. A palindrome is something that is read backward
        as it is forward. negatives would return false because the negative sign cannot be mirrored.
    */
    
    /*
    
        Heres my response
            return false if x < 0
            return true if x < 10
            
            let temp = x
            
            while loop if temp isn't 0
                add (temp % 10) to result
                temp = floored(temp / 10)
            
            return x === result
    */
    if(x < 0) return false;
    if(x < 10) return true;
    
    let temp = x;
    let result = '';
    
    while(temp !== 0){
        result += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    return x === Number(result)
    
};