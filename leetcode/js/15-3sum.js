/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || i > 0 && nums[i] !== nums[i - 1]) {
            let low = i + 1, high = nums.length - 1;
            while (low < high) {
                if (nums[low] + nums[high] + nums[i] === 0) {
                    res.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                }
                else if (nums[low] + nums[high] + nums[i] < 0) {
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    low++
                }
                else {
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    high--;
                }
            }
        }
    }
    return res;
};