/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let s = '';
    let c = 0, i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0 || c === 1) {
        c += i >= 0 ? Number(a[i--]) : 0;
        c += j >= 0 ? Number(b[j--]) : 0;
        s = String(c % 2) + s;
        c = Math.floor(c / 2);
    }
    return s;
};