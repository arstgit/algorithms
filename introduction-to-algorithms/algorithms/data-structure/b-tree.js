function B_TREE_SERACH(x, k) {
    let i = 1;
    while (i <= x.n && k > x.key[i]) i++;
    if (i <= x.n && k == x.key[i]) return [x, i];
    else if (x.leaf) return;
    else {
        DISK_READ(x.c[i]);
        return B_TREE_SERACH(x.c[i], k);
    }
}

function B_TREE_CREATE(T) {
    x = ALLOCATE_NODE();
    x.leaf = ture;
    x.n = 0;
    DISK_WRITE(x);
    T.root = x;
}

function B_TREE_SPLIT_CHILD(x, i) {
    let z = ALLOCATE_NODE();
    let y = x.c[i];
    z.leaf = y.leaf;
    z.n = t - 1;
    for (let j = 1; j < t; j++) z.key[i] = y.key[j + t];
    if (!y.leaf) {
        for (let j = 1; j < t + 1; j++) {
            z.c[i] = y.c[i + t];
        }
    }
    y.n = t - 1;
    for (let j = x.n + 1; j > i; j--) {
        x.c[j + 1] = x.c[j];
    }
    x.c[i] = z;
    for (let j = x.n; j > i - 1; j--) {
        x.key[j + 1] = x.key[j];
    }
    x.key[i] = y.key[t];
    x.n++;
    DISK_WRITE(y);
    DISK_WRITE(z);
    DISK_WRITE(x);
}

function B_TREE_INSERT(T, k) {
    let r = T.root;
    if (r.n == 2 * t - 1) {
        let s = ALLOCATE_NODE();
        T.root = s;
        s.leaf = false;
        s.n = 0;
        s.c[1] = r;
        B_TREE_SPLIT_CHILD(s, 1);
        B_TREE_INSERT_NOFULL(s, k);
    }
    else B_TREE_INSERT_NOFULL(r, k);
}

function B_TREE_INSERT_NOFULL(x, k) {
    let i = x.n;
    if (x.leaf) {
        while (i >= 1 && k < x.key[i]) {
           x.key[i + 1] = x.key;
           i--; 
        }
        x.key[i + 1] = k;
        x.n++;
        DISK_WRITE(x);
    }
    else {
        while (i >= 1 && k < x.key[i]) {
            i--;
        }
        i++;
        DISK_READ(x.c[i]);
        if (x.c[i].n == 2 * t - 1) {
            B_TREE_SPLIT_CHILD(x, i);
            k > x.key[i] && (i++);
        }
        B_TREE_INSERT_NOFULL(x.c[i], k);
    }
}