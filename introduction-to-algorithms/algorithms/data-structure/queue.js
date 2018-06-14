function ENQUEUE(Q, x) {
    Q[Q.tail] = x;
    if(Q.tail == Q.length) Q.tail = 1;
    else Q.tail++;
}

function DEQUEUE(Q) {
    x = Q[Q.head];
    if(Q.head == Q.length) Q.head = 1;
    else Q.head++;
    return x;
}