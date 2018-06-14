/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let max = 1;
    let reasult = [];
    reasult.push(s[0]);
    for(let i = 0; i < s.length - 1; i++) {
        for(let j = i + 1; j < s.length; j++) {
            let curr = Array.prototype.slice.call(s.slice(i, j + 1));
            let curr1 = curr.concat().toString();
            let curr2 = curr.reverse().toString();
            if(curr1 == curr2) {
                if(max !== Math.max(max, j - i + 1)) reasult.push(s.slice(i, j + 1));
                max = Math.max(max, j - i + 1);
                //console.log(curr1, max);
            }
        }
    }
    return reasult[reasult.length - 1];
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length == 1) return s;
    let L = [];
    let t = Array.from(s).reverse().join('');
    let m = s.length;
    let z = 0, start = 0;
    let ret = '';
    for (let i = 0; i < m; i++) L[i] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (s[i] == t[j]) {
                if (i == 0 || j == 0) L[i][j] = 1;
                else L[i][j] = L[i - 1][j - 1] + 1;
                if (L[i][j] > z && i == m - 1 - (j - L[i][j] + 1)) {
                    z = L[i][j];
                    start = i;
                    
                }
            }
            else L[i][j] = 0;
        }
    }
    ret = s.slice(start - z + 1, start + 1);
    return ret;
};



var longestPalindrome = function(s) {
    let table = [];
    let n = s.length;
    if (n == 1) return s;
    if (n == 2) {
        if (s[1] == s[0]) return s;
    }
    let z = 0;
    let start = 0;
    let reasult = '';
    for (let i = 0; i < n; i++) table[i] = [];
    for (let l = 1; l < n + 1; l++) {
        for (let i = 0; i < n - l + 1; i++) {
            if (l == 1 || l ==2) {
                l == 1 && (table[i][i] = true);
                l == 2 && (table[i][i + 1] = s[i] == s[i + 1]);
            }
            else {
                table[i][i + l - 1] = (table[i + 1][i + l - 2] && s[i] == s[i + l - 1]);

            }
            if (l > z && table[i][i + l - 1] == true) {
                z = l;
                start = i;
            }
        }
    }

    reasult = s.slice(start, start + z);
    return reasult;
};






//accepted

var longestPalindrome = function(s) {
   let start = 0, end = 0;
   for (let i = 0; i < s.length; i++) {
       let len1 = e(s, i, i);
       let len2 = e(s, i, i + 1);
       let len = Math.max(len1, len2);
       if (len > end - start) start = i - Math.floor((len -1) / 2), end = i + Math.floor(len / 2);
   }
   return s.slice(start, end + 1);
};
function e(s, l, r) {
    let L = l, R = r;
    while (L >= 0 && R < s.length && s[L] == s[R]) L--, R++;
    return R - L - 1;
}