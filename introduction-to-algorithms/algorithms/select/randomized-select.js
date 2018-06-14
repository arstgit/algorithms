function RANDOMIZED_PARTITION(A, p, r) {
    let n = Math.floor(Math.random() * (r - p + 1) + p);
    let temp = A[r];
    A[r] = A[n];
    A[n] = temp;

    let x = A[r];
    let i = p - 1;
    for(let j = p; j < r; j++) {
        if(A[j] <= key) {
            i++
            let temp = A[j];
            A[j] = A[i];
            A[i] = temp;
        }
    }
    A[r] = A[i + 1];
    A[i + 1] = x;
    return i + 1;
}

function RANDOMIZED_SELECT(A, p, r, i) {
    if(p == r) {
        return A[p];
    }
    let q = RANDOMIZED_PARTITION(A, p, r);
    let k = q - p + 1;
    if(i == k) return A[q];
    else if(i < k) return RANDOMIZED_SELECT(A, p, q - 1, i);
    else return RANDOMIZED_SELECT(A, q + 1, r, i - k);
}

