function CONNECTED_COMPONENTS(G) {
    //for each vextex v belongs to G.V]
        //MAKE_SET(v);
    //for each edge (u, v) belongs to G.E
        //if FIND_SET(u) != FIND_SET(v)
            //UNION(u, v)
}

function SAME_COMPONENT(u, v) {
    //if FIND_SET(u) == FIND_SET(v)
        return true;
    //else return false
}


//disjoint-set forest
function MAKE_SET(x) {
    x.p = x;
    x.rank = 0;
}
function UNION(x, y) {
    LINK(FIND_SET(x), FIND_SET(y));
}
function LINK(x, y) {
    if (x.rank > y.rank) y.p = x;
    else {
        x.p = y;
        if (x.rank == y.rank) y.rank++;
    }
}
function FIND_SET(x) {
    x != x.p && (x.p = FINDSET(x.p));
    return x.p;
}