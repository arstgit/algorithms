function LEFT_ROTATE(T, x) {
    y = x.right;
    x.right = y.left;
    y.left != T.nil && (y.left.p = x);
    y.p = x.p;
    if (x.p == T.nil) T.root = y;
    else if (x == x.p.left) x.p.left = y;
    else x.p.right = y;
    y.left = x;
    x.p = y;
}

function RB_INSERT(T, z) {
    y = T.nil;
    x = T.root;
    while (x != T.nil) {
        y = x;
        (z.key < x.key) ? x = x.left : x = x.right;
    }
    z.p = y;
    if (y == T.nil) T.root = z;
    else if (z.key < y.key) y.left = z;
    else y.right = z;
    z.left = T.nil;
    z.right = T.nil;
    z.color = RED;
    RB_INSERT_FIXUP(T, z);
}

function RB_INSERT_FIXUP(T, z) {
    while (z.p.color == RED) {
        if (z.p == z.p.p.left) {
            y = z.p.p.right;
            if (y.color == RED) {
                z.p.color = BLACK;
                y.color = BLACK;
                z.p.p.color = RED;
                z = z.p.p;
            }
            else {
                if (z == z.p.right) {
                z = z.p;
                LEFT_ROTATE(T, z);
                }
                z.p.color = BLACK;
                z.p.p.color = RED;
                RIGHT_ROTATE(T, z.p.p);
            }
        }
        else {}//same as then clause with 'right' and 'left' exchanged
    }
    T.root.color = BLACK;
}

function RB_TRANSPLANT(T, u, v) {
    if (u.p == T.nil) T.root = v;
    else if (u == u.p.left) u.p.left = v;
    else u.p.right = v;
    v.p = u.p;
}

function RB_DELETE(T, z) {
    y-original-color = y.color;
    if (z.left = T.nil) {
        x = z.right;
        RB_TRANSPLANT(T, z, z.right);
    }
    else if (z.right == T.nil) {
        x = z.left;
        RB_TRANSTLANT(T, z, z.left);
    }
    else {
        y = TREE_MIMUM(z.right);
        y-original-color = y.color;
        x = y.right;
        if (y.p == z) x.p = y;
        else {
            RB_TRANSPLANT(T, y, y.right);
            y.right = z.right;
            y.right.p = y;
        }
        RB_TRANSPLANT(T, z, y);
        y.left = z.left;
        y.left.p = y;
        y.color = z.color;
    }
    (y-original-color == BLACK) && RB_DELETE_FIXUP(T, x);
}


function RB_DELETE_FIXUP(T, x) {
    while (x != T.root && x.color == BLACK) {
        if (x == x.p.left) {
            w = x.p.right;
            if (w.color = RED) {
                w.color = BLACK;
                x.p.color = RED;
                LEFT_ROTATE(T, x.p);
                w = x.p.right;
            }
            if (w.left.color == BLACK && w.right.color == BLACK) {
                w.color = RED;
                x = x.p;
            }
            else {
                if (w.right.color == BLACK) {
                    w.left.color = BLACK;
                    w.color = RED;
                    RIGHT_ROTATE(T, w);
                    w = x.p.right;
                }
                w.color = x.p.color;
                x.p.color = BLACK;
                w.right.color = BLACK;
                LEFT_ROTATE(T, x.p);
                x = T.root;
            }
        }
        else {
            //same as then clause with 'right' and 'left' changed
        }
    }
    x.color = BLACK;
}