package leetcode

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var dummy = new(ListNode)
	var curr = dummy
	var carry int
	var x, y int
	for l1 != nil || l2 != nil {
		if l1 != nil {
			x = l1.Val
			l1 = l1.Next
		} else {
			x = 0
		}
		if l2 != nil {
			y = l2.Val
			l2 = l2.Next
		} else {
			y = 0
		}
		sum := x + y + carry
		carry = sum / 10
		curr.Next = new(ListNode)
		curr = curr.Next
		curr.Val = sum % 10
	}
	if carry > 0 {
		curr.Next = new(ListNode)
		curr.Next.Val = carry
	}
	return dummy.Next
}
