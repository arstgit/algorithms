/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let width = obstacleGrid[0].length;
    let dp = [];
    for (let i = 0; i < width; i++) dp.push(0);
    dp[0] = 1;
    for (let row of obstacleGrid) {
        for (let i = 0; i < width; i++) {
            if (row[i] === 1) dp[i] = 0;
            else if (i > 0) dp[i] += dp[i - 1];
        }
    }
    return dp[width - 1];
};