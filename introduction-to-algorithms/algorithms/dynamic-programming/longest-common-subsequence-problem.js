function LCS_LENGTH(X, Y) {
    let m = X.length;
    let n = Y.length;
    let b = [], c = [];
    for (let i = 0; i < m + 1; i++) {
        b[i] = new Array(n + 1);
        c[i] = new Array(n + 1);
    }
    for (let i = 1; i < m + 1; i++) {
        c[i][0] = 0;
    }
    for (let j = 1; j < n + 1; j++) {
        c[0][j] = 0;
    }
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (X[i] == Y[j]) {
                c[i][j] = c[i - j] + 1;
                b[i][j] = 'left obliquely above'
            }
            else if (c[i - 1, j] >= c[i, j - 1]) {
                c[i][j] = c[i - 1][j];
                b[i][j] = 'above';
            }
            else {
                c[i][j] = c[i][j - 1];
                b[i][j] = 'left';
            }
        }
    }
    return [c, b];
}

function PRINT_LCS(b, X, i, j) {
    if (i == 0 || j == 0) return;
    if (b[i, j] == 'left obliquely above') {
        PRINT_LCS(b, X, i - 1, j - 1);
        console.log(X[i]);
    }
    else if (b[i, j] == 'above') PRINT_LCS(b, X, i - 1, j);
    else PRINT_LCS(b, X, i, j - 1);
}