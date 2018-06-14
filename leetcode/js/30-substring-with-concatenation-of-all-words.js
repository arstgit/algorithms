/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let counts = new Map();
    for (let word of words) counts.set(word, counts.get(word) ? (counts.get(word) + 1) : 1 );
    let n = s.length, num = words.length, len = words[0].length;
    let indexes = [];
    for (let i = 0; i < n - num * len + 1; i++) {
        let seen = new Map();
        let j = 0;
        for (; j < num; j++) {
            let word = s.substr(i + j * len, len);
            if (counts.get(word) !== undefined) {
                seen.set(word, seen.get(word) ? (seen.get(word) + 1) : 1);
                if (seen.get(word) > counts.get(word)) break;
            }
            else break;
        }
        j === num && indexes.push(i);
    }
    return indexes;
};



var findSubstring = function(s, words) {
    let ans = [];
    let n = s.length, cnt = words.length;
    if (n < 1 || cnt < 1) return ans;
    
};



/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// time limit exceeded
var findSubstring = function(s, words) {
    let strs = [];
    let res = [];
    let n = s.length;
    addStr(strs, '', words);
    for (let i = 0; i < strs.length; i++) {
        strStr(s, strs[i], res);
    }
    return Array.from(new Set(res));
};
function addStr(strs, strr, words) {
    if (words.length === 0) {
        strs.push(strr);
        return;
    }
    for (let i = 0; i < words.length ; i++) {
        let newStr = words.concat();
        newStr.splice(i, 1);
        addStr(strs, strr + words[i], newStr);
    }
}
var strStr = function(haystack, needle, res) {
    if (needle.length === 0) return 0;
    let m = haystack.length, n = needle.length;
    let arr = kmp(needle);
    let q = 0;
    for (let i = 0; i < m; i++) {
        while (q > 0 && needle[q] !== haystack[i]) q = arr[q];
        needle[q] === haystack[i] && q++;
        if (q === n) {
            res.push(i - n + 1);
            q = arr[q];
        }
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








