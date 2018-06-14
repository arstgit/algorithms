function GENERIC_MST(G, w) {
    let A = null;
    //while A does not form a spanning tree
        //find an edge(u, v) that is safe for A
        //A = A U {(u, v)}
    return A;
}

function MST_KRUSKAL(G, w) {
    let A = null;
    //for each vertex belongs to G.V
        //MAKE_SET(v)
    //sort the edges of G.E into nondecreasing order by weight w
    //for each edge(u, v) belongs to G.E, taken in nondecreasing order by weight
        //if FIND_SET(v) != FIND_SET(u)
            //A = A U {(u, v)}
            //UNION(u, v)
    return A;
}

function MST_PRIM(G, w, r) {
    //for each u belongs to G.V
        //u.key = Infinity;
        //u.p = null
    r.key = 0;
    let Q = G.V;
    while (Q != null) {
        let u = EXTRACT_MIN(Q);
        //for each v belongs to G.Adj[u]
            //if (v belongs to Q && w(u, v) < v.key)
                v.p = u;
                v.key = w(u, v);
    }
}