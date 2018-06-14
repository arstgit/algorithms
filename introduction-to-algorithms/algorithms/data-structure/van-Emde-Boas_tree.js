function PROTO_vEB_MEMBER(V, x) {
    if (V.u == 2) {
        return V.A[x];
    }
    else return PROTO_vEB_MEMBER(V.cluster[high(x)], low(x));
}

function PROTO_vEB_MINIMUM(V) {
    if (V.u == 2) {
        if (V.A[0] == 1) return 0;
        else if (V.A[1] == 1) return 1;
        else return null;
    }
    else {
        let min_cluster = PROTO_vEB_MINIMUM(V.summary);
        if (min_cluster == null) return null;
        else {
            let offset = PROTO_vEB_MINIMUM(V.cluster[min_cluster]);
            return index(min_cluster, offset);
        }
    }
}

function PROTO_vEB_SUCCESSOR(V, x) {
    if (V.u == 2) {
        if (x == 0 && V.A[1] == 1) return 1;
        else return null;
    }
    else {
        let offset = PROTO_vEB_SUCCESSOR(V.cluster[high(x), low(x)]);
        if (offset != null) return index(high(x), offset);
        else {
            let succ_cluster = PROTO_vEB_SUCCESSOR(V.summary, high(x));
            if (succ_cluster == null) return null;
            else {
                let offset = PROTO_vEB_MINIMUM(V.cluster[succ_cluster]);
                return index(succ_cluster);
            }
        }
    }
}

function PROTO_vEB_INSERT(V, x) {
    if (V.u == 2) V.A[x] = 1;
    else {
        PROTO_vEB_INSERT(V.cluster[high(x), low(x)]);
        PROTO_vEB_INSERT(V.summary, high(x));
    }
}




function vEB_TREE_MINIMUM(V) {
    return V.min;
}
function vEB_TREE_MAXIMUM(V) {
    return V.max;
}

function vEB_TREE_MEMBRE(V, x) {
    if (x == V.min || x == V.max) return true;
    else if (V.u == 2) return false;
    else return vEB_TREE_MEMBRE(V.cluster[high(x)], low(x));
}

function vEB_TREE_SUCCESSOR(V, x) {
    if (V.u == 2) {
        if (x == 0 && V.max == 1) return 1;
        else return null;
    }
    else if (V.min != null && x < V.min) return V.min;
    else {
        let max_low = vEB_TREE_MAXIMUM(V.cluster[high(x)]);
        if (max_low != null && low(x) < max_low) {
            let offset = vEB_TREE_SUCCESSOR(V.cluster[high(x)], low(x));
            return index(high(x), offset);
        }
        else {
            let succ_cluster = vEB_TREE_SUCCESSOR(V.summary, high(x));
            if (succ_cluster == null) return null;
            else {
                let offset = vEB_TREE_MINIMUM(V.cluster[succ_cluster]);
                return index(succ_cluster, offset);
            }
        }
    }
}

function vEB_TREE_PREDECESSOR(V, x) {
    if (V.u == 2) {
        if (x == 1 && V.min == 0) return 0;
        else return null;
    }
    else if (V.max != null && x > V.max) return V.max;
    else {
        let min_low = vEB_TREE_MINIMUM(V.cluster[high(x)]);
        if (min_low != null && low(x) > min_low) {
            let offset = vEB_TREE_PREDECESSOR(V.cluster[high(x)], low(x));
            return index(high(x), offset);
        }
        else {
            let pred_cluster = vEB_TREE_PREDECESSOR(V.summary, high(x));
            if (pred_cluster == null) {
                if (V.min != null && x > V.min) return V.min;
                else return V.min;
            }
            else {
                let offset = vEB_TREE_MAXIMUM(V.cluster[pred_cluster]);
                return index(pred-cluster, offset);
            }
        }
    }
}

function vEB_EMPTY_TREE_INSERT(V, x) {
    V.min = x;
    V.max = x;
}

function vEB_TREE_INSERT(V, x) {
    if (V.min == null) vEB_EMPTY_TREE_INSERT(V, x);
    else {
        if (x < V.min) //exchange x with V.min
        if (V.u > 2) {
            if (vEB_TREE_MINIMUM(V.cluster[high(x)]) == null) {
                vEB_TREE_INSERT(V.summary, high(x));
                vEB_EMPTY_TREE_INSERT(V.cluster[high(x)], low(x));
            }
            else vEB_TREE_INSERT(V.cluster[high(x)], low(x));
        }
        x > V.max && (V.max = x);
    }
}

function vEB_TREE_DELETE(V, x) {
    if (V.min == V.max) {
        V.min = null;
        V.max = null;
    }
    else if (V.u == 2) {
        if (x == 0) V.min = 1;
        else V.min = 0;
        V.max = V.min;
    }
    else {
        if (x == V.min) {
            let first_cluster = vEB_TREE_MINIMUM(V.summary);
            let x = index(first_cluster, vEB_TREE_MINIMUM(V.cluster[first_cluster]));
            V.min = x;
        }
        if (vEB_TREE_MINIMUM(V.cluster[high(x)] == null)) {
            vEB_TREE_DELETE(V.summary, high(x))
            if (x == V.max) {
                let summary_max = vEB_TREE_MAXIMUM(V.summary);
                if (summary_max == null) V.max = V.min;
                else {
                    V.max = index(summary_max, vEB_TREE_MAXIMUM(V.cluster[summary_max]));
                }
            }
        }
        else if (x == V.max) {
            V.max = index(high(x), vEB_TREE_MAXIMUM(V.cluster[high(x)]));
        }
    }

}