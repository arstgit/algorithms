/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0, j = nums.length - 1;
    let ret = [-1, -1];
    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        nums[mid] < target ? (i = mid + 1) : (j = mid);
    }
    if (nums[i] !== target) return ret;
    else ret[0] = i;
    j = nums.length - 1;
    while (i < j) {
        let mid = Math.floor((i + j) / 2 + 1);
        nums[mid] > target? (j = mid - 1) : (i = mid);
    }
    ret[1] = j;
    return ret;
};