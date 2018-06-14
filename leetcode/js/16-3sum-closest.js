/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let ans = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let low = i + 1, high = nums.length - 1;
        while (low < high) {
            res = nums[i] + nums[low] + nums[high];
            if (Math.abs(ans - target) > Math.abs(res - target)) {
                ans = res;
                if (Math.abs(res - target) === 0) return res;
            }
            res > target ? high-- : low++;
        }
    }
    return ans;
};