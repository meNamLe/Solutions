var lengthOfLongestSubstring = function(s) {
    /*
        hash to store characters
        i // left index
        j // right index
        ans // longest substring length
        
        while i < length && j < length
            if hash does not have a chracter at index j 
                add it to hash
                j = i + 1
                ans will change if current j - i is bigger
            else 
                delete character at index i from hash
                i = i + 1
        
        return anshttps://leetcode.com/problemset/all/
    */
    
    const hash = {};
    const n = s.length;
    let ans = 0, 
        i = 0,
        j = 0;
    
    while(i < n && j < n){
        if(hash[s[j]] === undefined) {
            hash[s[j++]] = true
            ans = Math.max(ans, j - i);
        } else {
            delete hash[s[i++]];
        }
    }
    
    return ans
};