var reverse = function(x) {
    /*
        while loop x !== 0
            add (x % 10) to res
            x = floored(x / 10)
            
        return in regards to conditions
    */
    const sign = Math.sign(x);
    const pow = Math.pow(2,31) * sign;
    x = Math.abs(x);
    let res = '';
    
    while(x !== 0){
        res += x % 10;
        x = Math.floor(x / 10);
    }
    
    res = Number(res) * sign;
    if(sign > 0) {
        return res > pow ? 0 : res;
    } else {
        return res < pow ? 0 : res;
    }
    
};