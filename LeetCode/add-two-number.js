var addTwoNumbers = function(l1, l2) {
    /* 
        Solution O(n)
        
        create result linked list
        set current equal to result
        var overflow
        
        while loop while l1 and l2 !== null
            add two val of l1 and l2
            set overflow to 0
            
            if sum is > 9
                overflow set to 1
                sum = sum % 10
                
            l1 = l1.next
            l2 = l2.next
        
            current = current.next
        
        if overflow is equal to 1 create another node and make current.next equal that
        
        return result.next
    */
        
    const result = {};
    let current = result;
    let overflow = 0;
    
    while(l1 !== null || l2 !== null) {
        const first = (l1) ? l1.val : 0;
        const second = (l2) ? l2.val : 0;
        let sum = first + second + overflow;
        overflow = 0;
        if(sum > 9) {
            overflow = 1;
            sum = sum % 10;
        }
        
        l1 = (l1) ? l1.next : null; 
        l2 = (l2) ? l2.next : null;
        
        current.next = new ListNode(sum);
        current = current.next;
    }
    
    if(overflow === 1) {
        current.next = new ListNode(overflow);
    }
    
    return result.next
}