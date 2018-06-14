/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        for(j; j< nums.length; j++) {
            if(nums[i] + nums[j] == target) return [i, j];
        }
    }
};