/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let A = [];
    let one = [];
    for (let i = 0; i < n; i++) {
        one.push(0);
    }
    for (let i = 0; i < n; i++) {
        A.push(one.concat());
    }
    console.log(A)
    let i = 0, j = 0, di = 0, dj = 1;
    for (let k = 0; k < n * n; k++) {
        A[i][j] = k + 1;
        if (A[(i + di) % n][(j + dj) % n] || i + di < 0 || j + dj < 0) {
            let temp = dj;
            dj = -di;
            di = temp;
        }
        i += di;
        j += dj;
    }
    return A;
};
