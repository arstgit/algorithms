/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let A = nums1, B = nums2;
    let maxOfLeft, minOfRight;
    if (m > n) {
        m = nums2.length;
        n = nums1.length;
        A = nums2;
        B = nums1;
    }
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;
        if (i < m && B[j - 1] > A[i]) imin = i + 1;
        else if (i > 0 && A[i - 1] > B[j]) imax = i - 1;
        else {
            if (i === 0) maxOfLeft = B[j - 1];
            else if (j === 0) maxOfLeft = A[i - 1];
            else maxOfLeft = Math.max(A[i - 1], B[j - 1]);
            if ((m + n) % 2 === 1) return maxOfLeft;
            if (i === m) minOfRight = B[j];
            else if (j === n) minOfRight = A[i];
            else minOfRight = Math.min(A[i], B[j]);
            return (maxOfLeft + minOfRight) / 2;
        }
    }
};