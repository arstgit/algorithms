function NAIVE_STRING_MATCHER(T, P) {
    let n = T.length;
    let m = P.length;
    for (let s = 0; s < n - m + 1; s++) {
        //P[1..m] == T[s + 1...s + m] && console.log("Pattern occurs with shift"");
    }
}

function RABIN_KARP_MATCHER(T, P, d, q) {
    let n = T.length;
    let m = P.length;
    let h = Math.pow(h, m - 1) % q;
    let p = 0;
    let t = 0;
    for (let i = 1; i < m + 1; i++) p = (d * p + P[i]) % q, t = (d * t + T[i]) % q;
    for (let s = 0; s < n - m + 1; s++) {
        p == t && P[1..m] == T[s + 1..s + m] && console.log('Pattern occurs with shift');
        s < n - m && (t = (d * (t - T[s + 1] * h) + T[s + m + 1]) % q);
    }
}


function FINITE_AUTOMATON_MATCHER(T, b, m) {
    let n = T.length;
    let q = 0;
    for (let i = 0; i < n + 1; i++) {
        q = b(q, T[i]);
        q == m && console.log('Pattern occurs with shift' + (i - m));
    }
}

function COMPUTE_TRANSITION_FUNCTION(P, E) {
    let m = P.length;
    for (q = 0; q < m + 1; q++) {
        //for each charater a belongs to E
            let k = Math.min(m + 1, q + 2);
            //repeat
                k--;
            //until Pk >>> Pqa
            b(q, a) = k;
    }
    return b;
}


function KMP_MATCHER(T, P) {
    let n = T.length;
    let m = P.length;
    let pi = COMPUTE_PREFIX_FUNCTION(P);
    let q = 0;
    for (let i = 1; i < n + 1; i++) {
        while (q > 0 && P[q + 1] != T[i]) q = pi[q];
        P[q + 1] == T[i] && q++;
        q == m && (console.log('Pattern occurs with shift' + (i - m)), q = pi[q]);
    }
}

function COMPUTE_PREFIX_FUNCTION(P) {
    let m = P.length;
    let pi = new Array(m);
    pi[1] = 0;
    let k = 0;
    for (let q = 2; q < m + 1; q++) {
        while (k > 0 && P[k + 1] != P[q]) k = pi[k];
        P[k + 1] == P[q] && k++;
        pi[q] = k;
    }
    return pi;
}