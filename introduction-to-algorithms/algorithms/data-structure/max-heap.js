function PARENT(i) {
    return Math.floor((i - 1)/2);
}
function LEFT(i) {
    return 2 * i + 1;
}
function RIGHT(i) {
    return 2 * i + 2;
}

function MAX_HEAPIFY(A, i) {
    let l = LEFT(i);
    let r = RIGHT(i);
    let largest;
    if(l < A.heap_size && A[l] > A[i]) {
        largest = l;
    }
    else largest = i;
    if(r < A.heap_size && A[r] > A[largest]) {
        largest = r;
    }
    if(largest != i) {
        let temp = A[i];
        A[i] = A[largest];
        A[largest] = temp;
        MAX_HEAPIFY(A, largest);
    }
}

function BUILD_MAX_HEAP(A) {
    A.heap_size = A.length;
    for(let i = Math.floor((A.length - 1) / 2); i > -1; i--) {
        MAX_HEAPIFY(A, i);
    }
}

function HEAPSORT(A) {
    BUILD_MAX_HEAP(A);
    for(let i = A.length -1; i > 1; i--) {
        let temp = A[0];
        A[0] = A[i];
        A[i] = temp;
        A.heap_size--;
        MAX_HEAPIFY(A, 1);
    }
}

function HEAP_MAXIMUM(A) {
    return A[1];
}

function HEAP_EXTRACT_MAX(A) {
    if(A.heap_size < 0) {
        return 'heap underflow';
    }
    let max = A[0];
    A[0] = A[A.heap_size - 1];
    A.heap_size--;
    MAX_HEAPIFY(A, 0)
    return max;
}

function HEAP_INCREASE_KEY(A, i, key) {
    if(key < A[i]) {
        return 'new key is smaller than current key';
    }
    A[i] = key;
    while(i > 0 && A[PARENT(i)] < A[i]) {
        let temp = A[i];
        A[i] = A[PARENT(i)];
        A[PARENT(i)] = temp;
        i = PARENT(i);
    }
}

function MAX_HEAP_INSERT(A, key) {
    A.heap_size++;
    A[A.heap_size - 1] = -Infinity;
    HEAP_INCREASE_KEY(A, A.heap_size - 1, key); 
}