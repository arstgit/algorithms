/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    solve(board, 0);
};
function solve(board, a) {
    for (let i = a; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let k = 1; k < 10; k++) {
                    if (isValid(board, i, j, k.toString())) {
                        board[i][j] = k.toString();
                        if (solve(board, i)) return true;
                        else board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, i, j, c) {
    for (let k = 0; k < 9; k++) {
        if (board[i][k] === c || board[k][j] === c || board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + k % 3] === c) return false;
    }
    return true;
}