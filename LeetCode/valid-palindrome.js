var isPalindrome = function(s) {
    /*
    Gang gang
    */
    s = s.replace(/[^0-9a-z]/gi, "");
    s = s.toLowerCase();
    const len = s.length;
    for(let i = 0; i < Math.floor(len / 2); i++) {
        if(s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
};