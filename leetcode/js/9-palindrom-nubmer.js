/**
 * @param {number} x
 * @return {boolean}
 */

//very slow
var isPalindrome = function(x) {
    if (x < 0) return false;
    x = Math.abs(x).toString();
    let rev = Array.from(x).reverse().join('');
    if (rev === x) return true;
    else return false;
};


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
    let rev = 0;
    while (x > rev) {
        rev = rev * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return (x === rev || x === Math.floor(rev / 10));
};
