/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let curr = dummyHead;
    let carry = 0;
    while(l1 || l2) {
        let x = (l1 ? l1.val : 0);
        let y = (l2 ? l2.val : 0);
        sum = x + y + carry;
        curr.next = new ListNode(sum%10);
        carry = Math.floor(sum/10);
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        curr = curr.next;
    }
    (carry > 0) && (curr.next = new ListNode(carry));
    return dummyHead.next;
};