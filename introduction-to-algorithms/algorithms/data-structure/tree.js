function INORDER_TREE_WALK(x) {
    if(x != null) {
        INORDER_TREE_WALK(x.left);
        console.log(x.key);
        INORDER_TREE_WALK(x.right);
    }
}

function TREE_SEARCH(X, k) {
    if(x == null || k == x.key) return x;
    if(k < x.key) return TREE_SEARCH(x,left, k);
    else return TREE_SEARCH(x.right, k);
}
function ITERATIVE_TREE_SEARCH(x, k) {
    while(x != null && k != x.key) {
        (k < x.key) ? (x = x.left) : (x = x.right);
    }
    return x;
}

function TREE_MINIMUM(x) {
    while(x.right != null) {
        x = x.right;
    }
    return x;
}

function TREE_SUCCESSOR(x) {
    if(x.right != null) return TREE_MINIMUM(x.right);
    y = x.p;
    while(y != null && x == y.right) {
        x = y;
        y = y.p;
    }
    return y;
}

function TREE_INSERT(T, z) {
    y = null;
    x = T.root;
    while(x != null) {
        y = x;
        (z.key < x.key) ? (x = x.left) : (x = x.right);
    }
    z.p = y;
    if(y == null) T.root = z;
    else if(z.key < y.key) y.left = z;
    else y.right = z;
}


function TRANSPLANT(T, u, v) {
    if(u.p == null) T.root = v;
    else if(u == u.p.left) u.p.left = v;
    else u.p.right = v;
    v != null && (v.p = u.p);
}

function TREE_DELETE(T, z) {
    if(z.left == null) TRANSPLANT(T, z, z.right);
    else if(z.right == null) TRANSPLANT(T, z, z.left);
    else {
        y = TREE_MINIMUM(z.right)
        if(y.p != z) {
            TRANSPLANT(T, y, y.right);
            y.right = z.right;
            y.right.p = y;
        }
        TRANSPLANT(T, z, y);
        y.left = z.left;
        y.left.p = y;
    }
}
