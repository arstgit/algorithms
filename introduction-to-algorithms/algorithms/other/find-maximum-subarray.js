function FIND_MAXCROSSING_SUBARRAY(A, low, mid, high) {
    let left_sum = -Infinity;
    let sum = 0;
    let max_left;
    let max_right;
    for(let i = mid; i >= low; i--) {
        sum += A[i];
        if(sum > left_sum) {
            left_sum = sum;
            max_left = i;
        }
    }
    let right_sum = -Infinity;
    sum = 0;
    for(let j = mid + 1; j <= high; j++) {
        sum += A[i];
        if(sum > right_sum) {
            right_sum = sum;
            max_right = j;
        }
    }
    return [max_left, max_right, left_sum + right_sum];
}

function FIND_MAXIMUM_SUBARRAY(A, low, high) {
    let left_low, left_high, left_sum,
        right_low, right_high, right_sum,
        cross_low, cross_high, cross_sum;
    if(high == low) {
        return (low, high, A[low])
    }
    else {
        mid = Math.floor((low + high)/2);
        [left_low, left_high, left_sum] = FIND_MAXIMUM_SUBARRAY(A, low, mid);
        [right_low, right_high, right_sum] = FIND_MAXIMUM_SUBARRAY(A, mid + 1, high);
        [cross_low, cross_high, cross_sum] = FIND_MAXCROSSING_SUBARRAY(A, low, mid, high);
        if(left_sum >= right_sum >= cross_sum) {
            return [left_low, left_high, left_sum];
        }
        else if (right_sum >= left_sum >= cross_sum) {
            return [right_low, right_high, right_sum];
        }
        else {
            return [cross_low, cross_high, cross_sum];
        }
    }
}