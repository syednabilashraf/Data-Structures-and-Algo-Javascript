/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const numToFindTable = {}
    // console.log(numToFindTable)
    for(let i = 0;i<nums.length;i++){
        // console.log({i,value:nums[i]});
        
        if(numToFindTable[nums[i]]>=0){
            return [numToFindTable[nums[i]],i]
        }
        else{
            numToFindTable[target-nums[i]]=i  
            // console.log(numToFindTable)
          
        }
        
    }
    
};
console.log(
    twoSum([3,2,4],
        6)
)

