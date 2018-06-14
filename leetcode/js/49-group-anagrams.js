/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = [];
    let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    let map = new Map();
    for (let str of strs) {
        let key = 1;
        for (let char of str) {
            key *= prime[char.charCodeAt() - 'a'.charCodeAt()];
        }
        let t;
        if (map.has(key)) t = res[map.get(key)];
        else {
            t = [];
            res.push(t);
            map.set(key, res.length - 1);
        }
        t.push(str);
    }
    return res;
};


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let strArr = str.split('');
        strArr = strArr.sort().join('');
        console.log(strArr)
        if (!map.has(strArr)) map.set(strArr, []);
        map.get(strArr).push(str);
    }
    return [...map.values()];
};
