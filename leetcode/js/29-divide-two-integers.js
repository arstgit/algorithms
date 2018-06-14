/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (!divisor || dividend === -2147483648 && divisor === -1) return 2147483647;
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend === 2147483648 && divisor === 2147483648) return sign ? 1 : -1;
    let res = 0;
    while (dividend >= divisor) {
        let temp = divisor, multiple = 1;
        while (dividend >= temp << 1 >>> 0) {
            temp = temp << 1 >>> 0;
            multiple = multiple << 1 >>> 0;
            if (temp === 2147483648) break;
        }
        dividend -= temp;
        res += multiple;
    }
    return sign === 1 ? res : -res;
};