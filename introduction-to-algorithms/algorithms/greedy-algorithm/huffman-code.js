function HUFFMAN(C) {
    let n = C.length;
    let Q = C;
    for (let i = 1; i < n; i++) {
        let z = new Node();
        z.left = x = EXTRACT_MIN(Q);
        z.right = y = EXTRACT_MIN(Q);
        z.freq = x.freq + y.freq;
        INSERT(Q, z);
    }
    return EXTRACT_MIN(Q);
}