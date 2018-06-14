/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') return [];
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let ans = [''];
    let temp;
    for (let i = 0; i < digits.length; i++) {
        temp = [];
        let chars = map[digits[i]];
        for (let c = 0; c < chars.length; c++) {
            for (let j = 0; j < ans.length; j++) {
                temp.push(ans[j] + chars[c]);
            }
        }
        ans = temp;
    }
    return ans;
};