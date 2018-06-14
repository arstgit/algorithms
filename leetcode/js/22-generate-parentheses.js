/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    addParenthesis(res, '', n, 0);
    return res;
};

function addParenthesis (res, str, m, n) {
    if (m === 0 && n === 0) {
        res.push(str); 
        return;
    }
    m > 0 && addParenthesis(res, str + '(', m - 1, n + 1);
    n > 0 && addParenthesis(res, str + ')', m, n - 1);
    
}