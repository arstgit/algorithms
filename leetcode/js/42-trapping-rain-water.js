/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let a = 0;
    let b = height.length - 1;
    let max = 0;
    let leftmax = 0, rightmax = 0;
    while (a <= b) {
        leftmax = Math.max(leftmax, height[a]);
        rightmax = Math.max(rightmax, height[b]);
        leftmax < rightmax ? (max += (leftmax - height[a]), a++) : (max += rightmax - height[b], b--);
    }
    return max;
};