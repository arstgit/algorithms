/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m > n) return uniquePaths(n, m);
    let cur = [];
    for (let i = 0; i < m; i++) cur.push(1);
    for (let j = 1; j < n; j++) {
        for (let i = 1; i < m; i++) {
            cur[i] += cur[i - 1];
        }
    }
    return cur[m - 1];
};