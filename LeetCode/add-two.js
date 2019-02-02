var twoSum = function(nums, target) {
    /*
      dictionary variable
      
      for loop
          number is a property in dictionary
              if true return [ dictionary[number], current index ]
              else - set target - number as a key and current index as value
              
    */
  
  const dictionary = {};
  
  for(let i = 0; i < nums.length; i++) {
      if(dictionary[nums[i]] !== undefined) {
          return [dictionary[nums[i]], i]
      } else {
          dictionary[target - nums[i]] = i;
      }
  }
  
};