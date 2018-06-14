function PRINT_ALL_PAIRS_SHORTEST_PATH(P, i, j) {
    if (i == j) console.log(i);
    else if (p == null) console.log('no path from "i" to "j" exists');
    else PRINT_ALL_PAIRS_SHORTEST_PATH(P, i, p[i, j]), console.log(j);
}

function EXTEND_SHORTENT_PATHS(L, W) {
    let n = L.rows;
    //let L' = (l(ij)') be a new n*n matrix
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            //let l[i][j]' = INFINITY;
            for (let k = 1; k < n + 1; k++) {
                //l[i][j]' = Math.min(l[i][j]', l[i][k] + w[k][j])
            }
        }
    }
    //return L';
}
function SLOW_ALL_PAIRS_SHORTENT_PATHS(W) {
    let n = W.rows;
    //let L(1) = W;
    for (let m = 2; m < n; m++) {
        //let L(m) be a new n*n matrix
        //L(m) = EXTEND_SHORTENT_PATHS(L(m - 1), W)
    }
    //return L(n - 1);
}

function FASTER_ALL_PAIRS_SHORTENT_PATHS(W) {
    let n = W.rows;
    //let L(1) = W;
    let m = 1;
    while (m < n - 1) {
        //let L(2m) be a new n*n matrix
        //L(2m) = EXTEND_SHORTENT_PATHS(L(m), L(m))
        m *= 2;
    }
    //return L(m);
}

function FLOYD_WARSHALL(W) {
    let n = W.rows;
    //let D(0) = W;
    for (let k = 1; k < n + 1; k++) {
        //let D(k) = (d(i)(j)k) be a new n*n matrix
        for (let i = 1; i < n + 1; i++) {
            for (let j = 1; j < n + 1; j++) {
                //d(i)(j)k = Math.min(d(i)(j)(k - 1), d(i)d(k)(k - 1) + d(k)(j)(k - 1))
            }
        }
    }
    //return D(n);
}

function TRANSITIVE_CLOSURE(G) {
    let n = G.V.length;
    //let T(0) = (t(i)(j)(0)) be a new n*n matrix
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            //if (i == j || (i, j) belongs to G.E) t(i)(j)(0) = 1;
            //else t(i)(j)(0) = 0
        }
    }
    for (let k = 1; k < n + 1; k++) {
        //let T(k) = (t(i)(j)(k)) be a new n*n matrix
        for (let i = 1; i < n + 1; i++) {
            //for (let j = 1; j < n + 1; j++) t(i)(j)(k) = t(i)(j)(k) V t(i)(k)(k - 1) U t(k)(j)(k - 1)
        }
    }
    //return T(n);
}

function JOHNSON(G, w) {
    //compute G', where G'.V = G.V U {s}, G'.E = G.E U {(s, v): v belongs to G.V}, 
    //and w(s, v) = 0 for all v belongs to G.V
    //if (BELLMAN_FORD(G', w, s) == false) console.log('the input graph contains a negative-weight cycle');
    //else {
        //for each vertex v belongs to G'.V
            //set h(v) to the value of b(s, v)
            //computed by the Bellman-Ford algorithms
        //for each edge(u, v) belongs to G'.E
            //run DIJKSTRA(G, w, u) to compute b(u, v) for all v belongs to G.V
            //for each vertex v belongs to G.V
                //d(u)(v) = b(u, v) + h(v) - h(u)
    //}
    return D;
}







