func FindMedianSortedArrays(A, B []int) float64 {
	var (
		m      = len(A)
		n      = len(B)
		lens   = m + n
		left   = -1
		right  = -1
		index1 = 0
		index2 = 0
		median = lens / 2
	)
	for i := 0; i <= median; i++ {
		left = right
		if index1 < m && (index2 >= n || A[index1] < B[index2]) {
			right = A[index1]
			index1++
		} else {
			right = B[index2]
			index2++
		}
	}
	if (lens & 1) == 0 {
		return float64(left+right) / 2.0
	}
	return float64(right)
}
