function longestCommonPrefix(arr) {
    /*
        if first string in arr is empty then return ''
        
        for loop through first string in arr
            for loop starting at index 1 through arr
                compare currentSub of first string with current string
                    if true
                        judge = 1
            
            if judge is 1 
                add to result
            else 
                break for loop
    */
    
    let judge = 1;
    let result = '';
    if(arr[0] !== undefined) {
        for(let i = 0; i < arr[0].length; i++) {
            for(let j = 1; j < arr.length; j++) {
                if(arr[0][i] !== arr[j][i]) {
                    judge = 0;
                }
            }
            
            if(judge === 1) {
                result += arr[0][i];
            } else {
                break;
            }
        }
    } 
    
    return result
}