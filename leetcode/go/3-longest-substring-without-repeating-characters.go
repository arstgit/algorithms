package leetcode

func lengthOfLongestSubstring(s string) int {
	var m = make(map[int]int)
	var ans, curr int
	var i, j int
	for i < len(s) && j < len(s) {
		c := int(s[j])
		if v, ok := m[c]; ok && v >= i {
			i = v + 1
		}
		m[c] = j
		j++

		curr = j - i
		if ans < curr {
			ans = curr
		}

	}
	return ans
}
