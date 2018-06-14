/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;
    let l3 = curr.next.next.next;
    while (true) {
        let l1 = curr.next, l2 = l1.next;
        if (l2 === null) break;
        l3 = l2.next;
        curr.next = l2;
        l2.next = l1;
        l1.next = l3;
        curr = l1;
        if (l3 === null) break;
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let curr = head;
    let count = 0;
    while (curr !== null && count < 2) {
        curr = curr.next;
        count++;
    }
    if (count === 2) {
        curr = swapPairs(curr);
        while (count-- > 0) {
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }
        head = curr;
    }
    return head;
};
