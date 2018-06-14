function INSERTION_SORT(A) {
    for(let j = 1; j < A.length; j++) {
        let key = A[j];
        let i = j - 1
        while(i > -1 && A[i] > key) {
            A[i + 1] = A[i];
            i--;
        }
        A[i + 1] = key;
    }
}