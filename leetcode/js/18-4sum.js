/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let low = j + 1, high = nums.length - 1;
            while (low < high) {
                sum = nums[i] + nums[j] + nums[low] + nums[high];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[low], nums[high]]);
                    while(low < high && nums[low] === nums[low + 1]) low++;
                    while(low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                }
                else if (sum < target) {
                    while(low < high && nums[low] === nums[low + 1]) low++;
                    low++;
                }
                else {
                    while(low < high && nums[high] === nums[high - 1]) high--;
                    high--;
                }
            }
        }
    }
    return ans;
};