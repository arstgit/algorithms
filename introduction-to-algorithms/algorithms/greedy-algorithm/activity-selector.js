function RECURSIVE_ACTIVITY_SELECTOR(s, f, k, n) {
    let m = k + 1;
    while (m <= n && s[m] < f[k]) {
        m++;
    }
    if (m <= n) {
        return RECURSIVE_ACTIVITY_SELECTOR(s, f, m, n).concat(a[m]);
    }
    else return;
}

function GREEDY_ACTIVITY_SELECTOR(s, f) {
    let n = s.length;
    let A = [a[1]];
    let k = 1;
    for (let m = 2; m < n + 1; m++) {
        if (s[m] >= f[k]) {
            A = A.concat(a[m]);
            k = m;
        }
    }
    return A;
}