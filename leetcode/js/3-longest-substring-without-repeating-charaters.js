/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let n = s.length;
    let i = 0; j = 0;
    let obj = {};
    while(i < n && j < n) {
        if(obj[s[j]] !== true) {
            obj[s[j++]] = true;
            max = Math.max(max, j - i);
        }
        else {
            delete obj[s[i++]];
        }
    }
    return max;
};