
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for (let i = 1; i < n; i++) {
        let ans = '';
        for (let j = 0, count = 1; j < str.length; j++) {
            if (j === str.length - 1 || str[j] !== str[j + 1]) {
                ans = ans.concat(count, str[j]);
                count = 1;
            }
            else count++;
        }
        str = ans;
    }
    return str;
};