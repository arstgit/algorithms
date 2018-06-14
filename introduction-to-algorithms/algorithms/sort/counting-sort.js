function COUNTING_SORT(A, B, k) {
    let C = [];
    for(let i = 0; i < k + 1; i++) {
        C[i] = 0;
    }
    for(let j = 0; j < A.length; j++) {
        C[A[j]]++;
    }
    for(let i = 0; i < k + 1; i++) {
        C[i] += C[i - 1];
    }
    for(let j = A.length - 1; j > -1; j--) {
        B[C[A[j]]] = A[j];
        C[A[j]]--;
    }
}