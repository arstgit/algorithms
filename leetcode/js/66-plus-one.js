/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    let newNum = [];
    for (let i = 0; i < n + 1; i++) digits[i] = 0;
    digits[0] = 1;
    return digits;
};