/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0, j = nums.length - 1;
    let mid = Math.floor((i + j) / 2);
    while (i <= j) {
        mid = Math.floor((i + j) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) j = mid - 1;
        else i = mid + 1;
    }
    return i;
    
};