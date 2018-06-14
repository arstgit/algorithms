/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return [];
    let curr = lists[0];
    for (let i = 0; i < lists.length - 1; i++) {
        curr = mergeTwo(curr, lists[i + 1]);
    }
    return curr;
};

function mergeTwo(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    while (l1 !== null || l2 !== null) {
        let a = l1 ? l1.val : Infinity;
        let b = l2 ? l2.val : Infinity;
        a < b ? (curr.next = l1, l1 = l1.next) : (curr.next = l2, l2 = l2.next);
        curr = curr.next;
    }
    return dummy.next;
}



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return [];
    let arr = [];
    let dummy = new ListNode(0);
    let currNode = dummy;
    for (let i = 0; i < lists.length; i++) {
        let curr = lists[i];
            while (curr !== null) {
                arr.push(curr.val);
                curr = curr.next;
            }
    }
    arr.sort((a, b) => a - b);
    while (arr.length > 0) {
        let newNode = new ListNode(arr.shift());
        currNode.next = newNode;
        currNode = currNode.next;
    }
    return dummy.next;
};




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return [];
    let arr = [];
    let dummy = new ListNode(0);
    let currNode = dummy;
    for (let i = 0; i < lists.length; i++) {
        let curr = lists[i];
            while (curr !== null) {
                arr.push(curr.val);
                curr = curr.next;
            }
    }
    buildMaxHeap(arr);
    while (arr.length > 0) {
        let newNode = new ListNode(heapExtractMin(arr));
        currNode.next = newNode;
        currNode = currNode.next;
    }
    return dummy.next;
};

function buildMaxHeap(A) {
    for (let i = Math.floor((A.length - 1) / 2); i > -1; i--) {
        minHeapify(A, i);
    }
}
function minHeapify(A, i) {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let min;
    if (l < A.length && A[l] < A[i]) min = l;
    else min = i;
    if (r < A.length && A[r] < A[min]) min = r;
    if (min !== i) {
        let temp = A[i];
        A[i] = A[min];
        A[min] = temp;
        minHeapify(A, min);
    }
}
function heapExtractMin(A) {
    let min = A[0];
    A[0] = A[A.length - 1];
    console.log(A.length)
    A.length--;
        console.log(A.length)
    minHeapify(A, 0);
    return min;
}

