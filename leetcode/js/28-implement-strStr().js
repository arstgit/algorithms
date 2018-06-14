/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        for (let j = 0; j < needle.length && haystack[i + j] === needle[j]; j++) {
            if (j === needle.length - 1) return i;
        }
    }
    return -1;
};


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    let m = haystack.length, n = needle.length;
    let arr = kmp(needle);
    let q = 0;
    for (let i = 0; i < m; i++) {
        while (q > 0 && needle[q] !== haystack[i]) q = arr[q];
        needle[q] === haystack[i] && q++;
        if (q === n) return i - n + 1;
    }
    return -1;
};

function kmp(P) {
    let m = P.length;
    let arr = [];
    arr[1] = 0;
    let k = 0;
    for (let q = 1; q < m; q++) {
        while (k > 0 && P[k] !== P[q]) k = arr[k];
        P[k] === P[q] && k++;
        arr[q + 1] = k;
    }
    return arr;
}