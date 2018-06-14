/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let sign = 1, base = 0, i = 0;
    while (str[i] === ' ') i++;
    (str[i] == '-' || str[i] == '+') && (sign = 1 - 2 * (str[i++] == '-'));
    while (str[i] >= '0' && str[i] <= '9') {
        base = base * 10 + Number(str[i++]);
        if ((sign == 1 && base > 2147483647) || (sign == -1 && base > 2147483648)) {
            if (sign == 1) return 2147483647;
            else return -2147483648;
        }
    }
    return base * sign;
};