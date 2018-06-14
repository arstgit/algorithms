/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    bt(nums, [], res);
    return res;
};

function bt(leftNums, tempNums, res) {
    if (leftNums.length === 0) {
        res.push(tempNums);
        return;
    }
    let n = leftNums.length;
    for (let i = 0; i < n; i++) {
        bt(leftNums.filter((ele, j) => j !== i), tempNums.concat(leftNums[i]), res);
    }
}