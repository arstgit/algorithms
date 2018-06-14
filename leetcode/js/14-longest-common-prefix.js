var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }
    return prefix;
};


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    for (let i = 0; i < strs[0].length ; i++){
        let c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== c)
                return strs[0].slice(0, i);             
        }
    }
    return strs[0];
};


var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    return lcp(strs, 0, strs.length - 1);
};
function lcp(strs, left, right) {
    if (left === right) return strs[left];
    else {
        let mid = Math.floor((l + r) / 2);
        let l = lcp(strs, left, mid);
        let r = lcp(strs, mid + 1, r);
        return commonPrefix(l, r);
    }
}
function commonPrefix(left, right) {
    let min = Math.min(left.length, right.length);
    for (let i = 0; i < min; i++) {
        if (left[i] !== right[i]) {
            return left.slice(0, i);
        }
    }
    return left.slice(0, min);
}



var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let min = Infinity;
    for (let str of strs)
        min = Math.min(min, str.length);
    let low = 1;
    let high = min;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, middle))
            low = middle + 1;
        else
            high = middle - 1;
    }
    return strs[0].substring(0, (low + high) / 2);
};

function isCommonPrefix(strs, len){
    let str1 = strs[0].slice(0, len);
    for (let i = 1; i < strs.length; i++)
        if (!strs[i].startsWith(str1))
            return false;
    return true;
}