function MEMOIZED_CUT_ROD(p, n) {
    let r = [];
    for (let i = 0; i < n + 1; i++) {
        r[i] = -infinity;
    }
    return MEMOIZED_CUT_ROD_AUX(p, n, r);
}
function MEMOIZED_CUT_ROD_AUX(p, n, r) {
    if (r[n] >= 0) return r[n];
    if (n == 0) q = 0;
    else {
        q = -infinity;
        for (let i = 0; i < n + 1; i++) {
            q = Math.max(q, p[i] + MEMOIZED_CUT_ROD_AUX(p, n - i, r));
        }
    }
    r[n] = q;
    return q;
}

function BOTTOM_UP_CUT_ROD(p, n) {
    let r = [];
    r[0] = 0;
    for (let j = 0; j < n + 1; j++) {
        let q = -infinity;
        for (let i = 1; i < n + 1; i++) {
            q = Math.max(q, p[i] + r[j - i]);
        }
        r[j] = q;
    }
    return r[n];
}



function EXTENEDED_BOTTOM_UP_CUT_ROD(p, n) {
    let r = [];
    let s = [];
    r[0] = 0;
    for (let j = 0; j < n + 1; j++) {
        let q = -infinity;
        for (let i = 1; i < j + 1; i++) {
            if (q < p[i] + r[j - i]) {
                q = Math.max(q, p[i] + r[j - i]);
                s[j] = i;
            }
        }
        r[j] = q;
    }
    return [r, s];
}
function PRINT_CUT_ROD_SOLUTION(p, n) {
    [r, s] = EXTENEDED_BOTTOM_UP_CUT_ROD(p, n);
    while (n > 0) {
        console.log(s[n]);
        n = n - s[n];
    }
}


