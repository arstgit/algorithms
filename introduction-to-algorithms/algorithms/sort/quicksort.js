function PARTITION(A, p, r) {
    let x = A[r];
    let i = p - 1;
    for(let j = p; j < r; j++) {
        if(A[j] <= x) {
            i++;
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
        A[r] = A[i + 1];
        A[i + 1] = x;
    }
    return i + 1;
}

function QUICKSORT(A, p, r) {
    if(p < r) {
        let q = PARTITION(A, p, r);
        QUICKSORT(A, p, q -1);
        QUICKSORT(A, q + 1, r);
    }
}

function RANDOMIZED_PARTITION(A, p, r) {
    let i = Math.floor(Math.random()*(r - p + 1) + p);
    let temp = A[r];
    A[r] = A[i];
    A[i] = temp;
    return PARTITION(A, p, r);
}

function RANDOMIZED_QUICKSORT(A, p, r) {
    if(p < r) {
        let q = RANDOMIZED_PARTITION(A, p, r);
        RANDOMIZED_QUICKSORT(A, p, q -1);
        RANDOMIZED_QUICKSORT(A, q + 1, r);
    }
}



function TAIL_RECURSIVE_QUICKSORT(A, p, r) {
    while(p < r) {
        q = PARTITION(A, p, r);
        TAIL_RECURSIVE_QUICKSORT(A, p, q - 1);
        p = q + 1;
    }
}
