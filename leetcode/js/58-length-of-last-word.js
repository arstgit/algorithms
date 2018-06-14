
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let len = 0;
    let i = 0;
    while (s[i]) {
        if (s[i++] !== ' ') len++;
        else if (s[i] && s[i] !== ' ') len = 0;
    }
    return len;
};