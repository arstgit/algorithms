function INITIALIZE_SINGLE_SOURCE(G, s) {
    //for each vertex v belongs to G.V
        v.d = Infinity;
        v.p = null;
    s.d = 0;
}
function RELAX(u, v, w) {
    v.d > u.d + w(u, v) && (v.d = u.d + w(u, v), v.p = u);
}

function DELLMAN_FORD(G, w, s) {
    INITIALIZE_SINGLE_SOURCE(G, s);
    for (let i = 1; i <  G.V.length; i++) {
        //for each edge(u, v) belongs to G.E
            RELAX(u, v, w);
    }
    //for each edge(u, v) belongs to G.E
        if (v.d > u.d + w(u, v)) return false;
    return true;
}

function DAG_SHORTEST_PATHS(G, w, s) {
    //topologically sort the vertices of G
    INITIALIZE_SINGLE_SOURCE(G, s);
    //for each vertex u, taken in topologically sorted order
        //for each vertex v belongs to G.Adj[u]
            RELAX(u, v, w);
}

function DIJKSTRA(G, w, s) {
    INITIALIZE_SINGLE_SOURCE(G, s);
    let S = null;
    let Q = G.V; 
    while (Q != null) {
        let u = EXTRACT_MIN(Q);
        S = S U {u};
        //for each vertex v belongs to G.Adj[u]
            RELAX(u, v, w);
    }
}