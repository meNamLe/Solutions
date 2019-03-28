var generate = function(numRows) {
    /*
        O(n^2) time complexity;
        
        numbers in pascals triangle are the sum of
        index-1 and current index from one row up.
        
        if index-1 or current index is out of bounds,
        make it equal to 0 when calculating for the left and right variables
    */
    if(numRows === 0) return [];
    
    let arr = [[1]];
    
    for(let i = 1; i < numRows; i++) {
        arr[i] = [];
        for(let j = 0; j < i + 1; j++) {
            const left = arr[i - 1][j - 1] || 0;
            const right = arr[i - 1][j] || 0;
            arr[i].push(left + right);
        }
    }
    
    return arr;
};