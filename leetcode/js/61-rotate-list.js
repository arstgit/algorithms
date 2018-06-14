/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;

    let len = 1;
    let newH = tail = head;

    while (tail.next) tail = tail.next, len++;
    tail.next = head;

    if (k %= len) {
        for (let i = 0; i < len - k; i++) {
            tail = tail.next;
        }
    }
    newH = tail.next;
    tail.next = null;
    return newH;

};