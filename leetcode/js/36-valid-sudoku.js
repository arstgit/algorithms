/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let arr1 = [], arr2 = [], arr3 = [];
    for (let i = 0; i < 9; i++) {
        arr1[i] = [], arr2[i] = [], arr3[i] = [];
        for (let j = 1; j < 10; j++) {
            arr1[i][j] = arr2[i][j] = arr3[i][j] = 0;
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j], k = Math.floor(i / 3) * 3+ Math.floor(j / 3);
            if (num !== '.') {
                if (arr1[i][num] === 1 || arr2[j][num] === 1 || arr3[k][num] === 1) {
                    return false;
                }
                else arr1[i][num] = arr2[j][num] = arr3[k][num] = 1;
            }
        }
    }
    return true;
};