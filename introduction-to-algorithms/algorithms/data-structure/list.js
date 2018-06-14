function LIST_SEARCH(L, k) {
    x = L.head;
    while(x != null && x.key != k) {
        x = x.next;
    }
    return x;
}

function LIST_INSERT(L, x) {
    x.next = L.head;
    if(L.head != null) {
        L.head.prev = x;
    }
    L.head = x;
    x.prev = null;
}

function LIST_DELETE(L, x) {
    if(x.prev != null) x.prev.next = x.next;
    else L.head = x.next;
    if(x.next != null) x.next.prev = x.prev;
}


function LIST_DELETE2(L, x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
}

function LIST_SEARCH2(L, k) {
    x = L.nil.next;
    while(x != L.nil && x.key != k)  {
        x = x.next;
    }
    return x;
}

function LIST_INSERT2(L, x) {
    x.next = L.nil.next;
    L.nil.next.prev = x;
    L.nil.next = x;
    x.prev = L.nil;
}