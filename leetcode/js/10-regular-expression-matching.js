/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var re = new RegExp('^' + p + '$')
    return re.test(s);
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == null || p == null) return false;
    let dp = [];
    for (let i = 0; i < s.length + 1; i++) dp[i] = [];
    dp[0][0] = true;
    for (let i = 2; i < p.length + 1; i++) {
        p[i - 1] === '*' && (dp[0][i] = dp[0][i - 2]);
    }
    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < p.length + 1; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') dp[i][j] = dp[i - 1][j - 1];
            else if (p[j - 1] === '*') {
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                }
                else dp[i][j] = dp[i][j - 2];
            }
            else dp[i][j] = false;
        }
    }
    return dp[s.length][p.length] || false;
};