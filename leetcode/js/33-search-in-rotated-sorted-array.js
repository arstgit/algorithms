/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        nums[mid] > nums[high] ? (low = mid + 1) : (high = mid);
    }
    let rot = low;
    low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let realmid = (mid + rot) % nums.length;
        if (nums[realmid] === target) return realmid;
        nums[realmid] < target ? (low = mid + 1) : (high = mid - 1);
    }
    return -1;
};