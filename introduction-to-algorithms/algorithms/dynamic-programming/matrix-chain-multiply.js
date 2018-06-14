function MATRIX_CHAIN_ORDER(p) {
    n = p.length - 1;
    let m = [];
    let s = [];
    for (let i = 1; i < n + 1; i++) {
        m[i, i] = 0;
    }
    for (let l = 2; j < n + 1; j++){
        for (let i = 1; n < n - l + 2; n++) {
            j = i + l - 1;
            m[i, j] = Infinity;
            for (let k = i; k < j; k++) {
                q = m[i, k] + m[k + 1, j] + p[i - 1] * p[k] * p[j];
                if (q < m[i, j]) {
                    m[i, j] = q;
                    s[i, j] = k;
                }
            }
        }
    }
    return [m, s];
}
function PRINT_OPTIMAL_PARENS(s, i, j) {
    if (i == j) console.log('A');
    else {
        console.log('(');
        PRINT_OPTIMAL_PARENS(s, i, s[i, j]);
        PRINT_OPTIMAL_PARENS(s, s[i, j] + 1, j);
        console.log(')');
    }
}

function RECURSIVE_MATRIX_CHAIN(p, i, j) {
    if (i == j) return 0;
    m[i, j] = infinity;
    for (let k = i; k < j; k++) {
        q = RECURSIVE_MATRIX_CHAIN(p, i, k) + RECURSIVE_MATRIX_CHAIN(p, k + 1, j) + p[i - 1] * p[k] * p[j];
        q < m[i, j] && (m[i, j] = q);
    }
    return m[i, j];
}



function MEMOIZED_MATRIX_CHAIN(p) {
    let n = p.length - 1;
    let m;
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; i < n + 1; j++) {
            m[i, j] = infinity;
        }
    }
    return LOOKUP_CHAIN(m, p, 1, n);
}
function LOOKUP_CHAIN(m, p, i, j) {
    if (m[i, j] !== infinity) return m[i, j];
    if (i == j) m[i, j] = 0;
    else {
        for (let k = i; k < j; k++) {
            let q = LOOKUP_CHAIN(m, p, i, k) + LOOKUP_CHAIN(m, p, k + 1, j) + p[i - 1] * p[k] * p[j];
            q < m[i, j] && (m[i, j] = q);
        }
    }
    return m[i, j];
}