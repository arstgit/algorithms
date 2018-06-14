/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let length = 0;
    while (head != null) length++, head = head.next;
    length -= n;
    head = dummyHead;
    while (length > 0) length--, head = head.next;
    head.next = head.next.next;
    return dummyHead.next;
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let i = 1; i <= n + 1; i++) first = first.next;
    while (first !== null) first = first.next, second = second.next;
    second.next = second.next.next;
    return dummy.next;
};