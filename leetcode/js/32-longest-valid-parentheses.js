/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxans = 0;
    let dp = [];
    dp[0] = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
        }
        maxans = Math.max(dp[i], maxans);
    }
    return maxans;
};


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxans = 0;
    let stack =[];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i);
        else {
            stack.pop();
            stack.length === 0 ? stack.push(i) : maxans = Math.max(maxans, i - stack[stack.length - 1]);
        }
    }
    return maxans;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0, right = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? left++ : right++;
        left === right && (max = Math.max(max, 2 * left));
        right > left && (left = right = 0);
    }
    
    left = 0, right = 0;
    for (let i = s.length - 1; i > - 1; i--) {
        s[i] === '(' ? left++ : right++;
        left === right && (max = Math.max(max, 2 * left));
        right < left && (left = right = 0);
    }
    return max
};