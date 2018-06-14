/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = -1;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) nums[++i] = nums[j]; 
    }
    return ++i;
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, n = nums.length;
    while (i < n) {
        nums[i] === val ? (nums[i] = nums[n-- - 1]) : i++;
    }
    return i;
};