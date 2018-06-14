/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let combination = [];
    combinationFun(candidates, target, res, combination, 0);
    return res;
};
function combinationFun(candidates, target, res, combination, begin) {
    if (target === 0) {
        res.push(combination.concat());
        return;
    }
    for (let i = begin; i < candidates.length && target >= candidates[i]; i++) {
        combination.push(candidates[i]);
        combinationFun(candidates, target - candidates[i], res, combination, i);
        combination.pop()
    }
}