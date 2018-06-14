/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    function bt(leftNums, tempNums, res) {
        if (leftNums.length === 0) {
            res.push(tempNums);
            return;
        }
        leftNums.reduce((prev, curr, i) => {
            if (curr !== prev) bt(leftNums.filter((ele, j) => j !== i), tempNums.concat(curr), res);
            return curr;
        }, NaN)
    }
    bt(nums, [], res);
    return res;
};