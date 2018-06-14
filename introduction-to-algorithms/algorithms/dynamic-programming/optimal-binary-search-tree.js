function OPTIMAL_BST(p, q, n) {
    let e = [], w = [], root = [];
    for (let i = 0; i < n + 2; i++) {
        e[i] = new Array(n + 1);
        w[i] = new Array(n + 1);
        root[i] = new Array(n + 1);
    }
    for (let i = 1; i < n + 2; i++) {
        e[i][i - 1] = q[i - 1];
        w[i][i - 1] = q[i - 1];
    }
    for (let l = 1; l < n + 1; l++) {
        for (let i = 1; i < n - l + 2; i++) {
            let j = i + 1 - 1;
            e[i][j] = Infinity;
            w[i, j] = w[i, j - 1] + p[j] + q[j];
            for (let r = i; r < j + 1; r++) {
                t = e[i, r - 1] + e[r + 1, j] + w[i, j];
                if (t < e[i, j]) {
                    e[i, j] = t;
                    root[i, j] = r;
                }
            }
        }
    }
    return [e, root];
}

