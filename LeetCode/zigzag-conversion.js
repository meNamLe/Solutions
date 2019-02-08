var convert = function(s, numRows) {
    /*  
        arr.join('') will be returned at the end of the function
        
        the amount of elements in the array is equal to numRows
        
        For loop s.length many times
            adds single character from s to the right row in arr
    */
    const arr = [];
    let index = 0,
        step = 1;
    
    for(let i = 0; i < s.length; i++) {
        if(arr[index] === undefined) {
            arr[index] = '';
        }
        // [ 'se', 'ac', 'u' ]
        arr[index] += s[i];
        
        if(index === 0) {
            step = 1;
        } else if(index === numRows - 1) {
            step = -1;
        }
        
        index += step;
    }
    
    return arr.join('');
};
