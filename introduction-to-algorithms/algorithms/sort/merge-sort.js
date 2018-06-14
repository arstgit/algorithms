function MERGE(A, p, q, r) {
    let n1 = q - p + 1;
    let n2 = r - q;
    let L = [];
    let R = [];
    for(let i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }
    for(let j = 0; j < n2; j++) {
        R[j] = A[q + j + 1];
    }
    L[n1] = Infinity;
    R[n2] = Infinity;
    let i = 0;
    let j = 0;
    for(let k = p; k < r + 1; k++) {
        if(L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        }
        else {
            A[k] = R[j];
            j++;
        }
    }
}

function MERGE_SORT(A, p, r) {
    if(p < r) {
        q = Math.floor((p + r)/2);
        MERGE_SORT(A, p, q);
        MERGE_SORT(A, q + 1, r);
        MERGE(A, p, q, r);
    }
}