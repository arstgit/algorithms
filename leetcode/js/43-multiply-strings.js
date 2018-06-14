/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m = num1.length, n = num2.length;
    let pos = [];
    for (let i = 0; i < m + n; i++) pos[i] = 0;
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >=0; j--) {
            let mul = Number(num1[i]) * Number(num2[j]);
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + pos[p2]
            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }
    for (let i = 0; i < pos.length; i++) {
        if (pos[i] === 0) pos.shift(), i--;
        else break;
    }
    return pos.length === 0 ? '0' : pos.join('');
};

