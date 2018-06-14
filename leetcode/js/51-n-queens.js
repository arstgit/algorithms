/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = [];
    let nQueens = [];
    for (let i = 0; i < n; i++) nQueens.push('.'.repeat(n));
    solve(res, nQueens, 0, n);
    return res;
};
function solve(res, nQueens, row, n) {
    if (row === n) {
        res.push(nQueens.concat());
        return;
    }
    for (let col = 0; col < n; ++col) {
        if (isValid(nQueens, row, col, n)) {
            nQueens[row] = nQueens[row].slice(0, col) + 'Q' + nQueens[row].slice(col + 1);
            solve(res, nQueens, row + 1, n);
            nQueens[row] = nQueens[row].slice(0, col) + '.' + nQueens[row].slice(col + 1);
        }
    }
}
function isValid(nQueens, row, col, n) {
    for (let i = 0; i < row; i++) {
        if (nQueens[i][col] === 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
        if (nQueens[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
        if (nQueens[i][j] === 'Q') return false;
    }
    return true;
}





/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = [];
    let nQueens = [];
    for (let i = 0; i < n; i++) nQueens.push('.'.repeat(n));
    let flag = (new Array(5 * n - 2)).fill(1);
    solve(res, nQueens, flag, 0, n);
    return res;
};
function solve(res, nQueens, flag, row, n) {
    if (row === n) {
        res.push(nQueens.concat());
        return;
    }
    for (let col = 0; col < n; ++col) {
        if (flag[col] && flag[n + row + col] && flag[4 * n - 2 + col - row]) {
            flag[col] = flag[n + row + col] = flag[4 * n - 2 + col - row] = 0;
            nQueens[row] = nQueens[row].slice(0, col) + 'Q' + nQueens[row].slice(col + 1);
            solve(res, nQueens, flag, row + 1, n);
            nQueens[row] = nQueens[row].slice(0, col) + '.' + nQueens[row].slice(col + 1);
            flag[col] = flag[n + row + col] = flag[4 * n - 2 + col - row] = 1;

        }
    }
}