/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let cur = [];
    for (let i = 0; i < m; i++) cur.push(grid[0][0]);
    for (let i = 1; i < m; i++) cur[i] = cur[i - 1] + grid[i][0];
    for (let j = 1; j < n; j++) {
        cur[0] += grid[0][j];
        for (let i = 1; i < m; i++) {
            cur[i] = Math.min(cur[i - 1], cur[i]) + grid[i][j];
        }
    }
    return cur[m - 1];
};