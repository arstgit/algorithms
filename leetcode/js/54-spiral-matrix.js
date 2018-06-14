/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = [];
    if (matrix.length === 0) return res;
    let rowBegin = 0, rowEnd = matrix.length - 1, colBegin = 0, colEnd = matrix[0].length - 1;
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let j = colBegin; j <= colEnd; j++) {
            res.push(matrix[rowBegin][j]);
        }
        rowBegin++;
        for (let j = rowBegin; j <= rowEnd; j++) {
            res.push(matrix[j][colEnd]);
        }
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (let j = colEnd; j >= colBegin; j--) {
                res.push(matrix[rowEnd][j]);
            }
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (let j = rowEnd; j >= rowBegin; j--) {
                res.push(matrix[j][colBegin]);
            }
        }
        colBegin++;
    }
    return res;
};