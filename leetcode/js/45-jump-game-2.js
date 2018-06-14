/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let n = nums.length;
	if (n < 2) return 0;
	let level = 0, currentMax = 0, i = 0, nextMax = 0;
	while (i <= currentMax) {
		level++;
		for (; i <= currentMax; i++) {
			nextMax = Math.max(nextMax, nums[i] + i);
			if (nextMax >= n - 1) return level;
		}
		currentMax = nextMax;
	}
	return 0;
};