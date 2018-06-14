function MAKE_FIB_HFAP() {
    let H;
    H.n = 0;
    H.min = null;
    return H;
}
function FIB_HEAP_INSERT(H, x) {
    x.degree = 0;
    x.p = null;
    x.child = null;
    x.mark = false;
    if (H.min == null) {
        //create a root list for H containing just x
        H.min = x;
    }
    else {
        //insert x into H's root list
        x.key < H.min.key && (H.min = x);
    }
    H.n++;
}

function FIB_HEAP_UNION(H1, H2) {
    let H = MAKE_FIB_HFAP();
    H.min = H1.min;
    //concatenate the root list of H2 with the root list of H1
    if (H1.min == null || (H2.min != null && H2.min.key < H1.min.key)) {
        H.min = H2.min;
    }
    H.n = H1.n + H2.n;
    return H;
}

function FIB_HEAP_EXTRACT_MIN(H) {
    let z = H.min;
    if (z != null) {
        //for each child of z {
          //add x to the root list of H
          //x.p = null;
        //}
          //remove z from the root list of H
    if (z == z.right) H.min = null;
    else {
        H.min = z.right;
        CONSOLIDATE(H);
    }
    H.n--;
    }
    return z;
}

function FIB_HEAP_LINK(H, y, x) {
    //remove y form the root list of H
    //make y a child of x, incrementing x.degree
    y.mark = false;
}

function CONSOLIDATE(H) {
    let A = new Array(D(H.n) + 1);
    for (let i = 0; i < D[H.n] + 1; i++) {
        A[i] = null;
    }
    //for each node w in the root list of H {
        let x = w;
        let d = x.degree;
        while (A[d] != null) {
            y = A[d];
            //x.key > y.key && exchange x with y
            FIB_HEAP_LINK(H, y, x);
            A[d] = null;
            d++;
        }
        A[d] = x;
    //}
    H.min = null;
    for (let i = 0; i < D(H.n); i++) {
        if (A[i] != null) {
            if (H.min == null) {
                //create a root list for H containing just A[i]
                H.min = A[i];
            }
            else {
                //insert A[i] into H's root list
                A[i].key < H.min.key && (H.min = A[i]);
            }
        }
    } 
}

function CUT(H, x, y) {
    //remove x from the child list of y, decrementing y.degree
    x.p = null;
    x.mark = false;
}
function CASCADING_CUT(H, y) {
    let z = y.p;
    if (z != null) {
        if (y.mark == false) y.mark = true;
        else CUT(H, y, z), CASCADING_CUT(H, z);
    }
}

function FIB_HEAP_DECREASE_KEY(H, x, k) {
    if (k > x.key) throw 'new key is greater than current key';
    x.key = k;
    y = x.p;
    if (y != null && x.key < y.key) {
        CUT(H, x, y);
        CASCADING_CUT(H, y);
    }
    if (x.key < H.min.key) H.min = x;
}

function FIB_HEAP_DELETE(H, x) {
    FIB_HEAP_DECREASE_KEY(H, x, -Infinity);
    FIB_HEAP_EXTRACT_MIN(H);
}
