function DIRECT_ADDRESS_SEARCH(T, k) {
    return T[k];
}
function DIRECT_ADDRESS_INSERT(T, x) {
    T[x.key] = x;
}
function DIRECT_ADDRESS_DELETE(T, x) {
    T[x.key] = null;
}


function CHAINED_HASH_INSERT(T, x) {
    //insert x at the head of list T[h(x, key)]
}
function CHAINED_HASH_SEARCH(T, k) {
    //search for an element with key k in list T[h(k)]
}
function CHAINED_HASH_DELETE(T, x) {
    //delete x from the list T[h(x, key)]
}


//open addressing
function HASH_INSERT(T, k) {
    let i = 0;
    repeat
      j = h(k, i);
      if(T[j] == null) {
          T[j] = k;
          return j;
      }
      else {
          i++;
      }
    until(i == m)
    throw 'hash table overflow';
}
function HASH_SEARCH(T, k) {
    let i = 0;
    repeat
      j = h(k, i);
      if(T[j] == k) {
          return j;
      }
      i++;
    until(T[j] == null || i == m)
    return null;
}

