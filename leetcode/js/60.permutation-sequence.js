/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let pos = 0;
    let numbers = [];
    let factorial = [];
    let res = '';

    let sum = 1;
    factorial[0] = 1;
    for (let i = 1; i <= n; i++) {
        sum *= i;
        factorial[i] = sum;
    }

    for (let i = 1; i <= n; i++) numbers.push(i);

    k--;
    for (let i = 1; i <= n; i++) {
        let index = Math.floor(k / factorial[n - i]);
        res += numbers[index];
        numbers.splice(index, 1);
        k -= index * factorial[n - i];
    }
    return res;
};