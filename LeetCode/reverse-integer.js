var reverse = function(x) {
    /*
        create a string with x
        
        if sign is negative 
            assign sign to to negative
        
        loop through the str from end to start
            adding elements to num
            
        convert num to number and multiply the sign
        return if not between -2^31 and 2^31-1 
    */
    var str = String(x);
    var sign = 1;
    if (str[0] == '-') {
        sign = -1;
        str = str.substring(1, str.length);
    }
    
    var num = '';
    for (var i = str.length-1; i >= 0; i--) {
        num += str[i];
    }
    
    num = sign * Number(num);
    return (num > 2147483647 || num < -2147483648) ? 0 : num;
};