function STACK_EMPTY(S) {
    if(S.top == 0) {
        return true;
    }
    else return false;
}

function PUSH(S, x) {
    S.top++;
    S[S.top] = x;
}

function POP(S) {
    if(STACK_EMPTY(S)) {
        return 'underflow';
    }
    else {
        S.top--;
        return S[S.top + 1];
    }
}