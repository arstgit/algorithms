function BSF(G, s) {
    //for each vertex belongs to G.V - {s}
        u.color = WHITE;
        u.d = Infinity;
        u.p = null;
    s.color = GRAY;
    s.d = 0;
    s.p = null;
    let Q = null;
    ENQUEUE(Q, s);
    while (Q != null) {
        let u = DEQUEUE(Q);
        //for each v belongs to G.Adj[u]
            if (v.color == WHITE) {
                v.color = GRAY;
                v.d = u.d + 1;
                v.p = u;
                ENQUEUE(Q, v);
            }
        u.color = BLACK;
    }    
}

function PRINT_PATH(G, s, v) {
    if (v == s) console.log(s);
    else if (v.p == null) console.log('no path from "s" to "v" exists');
    else PRINT_PATH(G, s, v.p), console.log(v);
}

function DFS(G) {
    //for each vertex u belongs to  G.V
        u.color = WHITE;
        u.p = null;
    let time = 0;
    //for each vertex u belongs to G.V
        u.color == WHITE && DFS_VISIT(G, u);
}
function DFS_VISIT(G, u) {
    time++;
    u.d = time;
    u.color = GRAY;
    //for each v belongs to G.Adj[u]
        v.color == WHITE && (v.p = u, DFS_VISIT(G, v));
    u.color = BLACK;
    time++;
    u.f = time;
}

function TOPOLOGICAL_SORT(G) {
    //call DFS(G) to compute finishing times v.f for each vertex v
    //as each vertex is finished, insert it onto the front of a linked list
    //return the linked list of vertices
}

function STRONGLY_CONNECTED_COMPONENTS(G) {
    //call DFS(G) to compute finishing times u.f for each vertex u
    //compute G'
    //call DFS(G'), but in the main loop of DFS, consider the vertices in order of 
    //decreasing u.f (as computed in line 1)
    //output the vertices of each tree in the depth-first forest formed in line 3 as 
    //seperate strongly connected component
}