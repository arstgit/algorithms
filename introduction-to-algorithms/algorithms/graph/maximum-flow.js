function FORD_FULKERSON_METHOD(G, s, t) {
    //initialize flow f to 0
    //while there exists an augmenting path p in the residual network Gf
        //augment flow f among p
    return f;
}

function FORD_FULKERSON(G, s, t) {
    //for each edge(u, v) belongs to G.E
        (u, v).f = 0;
    //while (there exists a path p from s to t in the residual network Gf)
        //c(f)(p) = min{c(f)(u, v),:(u, v) is in p}
        //for each edge(u, v) in p
            //if (u, v) belongs to E
                (u.v).f = (u, v).f + c(f)(p);
            //else (v.u).f = (v.u).f - c(f)(p);
}