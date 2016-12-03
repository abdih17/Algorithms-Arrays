// 6. Given an array of numbers, split the array into two where one array contains
// the sum of n-1 numbers and the other array with all the n-1 elements.
// Time Complexity: O(N)

var canBalance = function(nums) {
    var leftSum = 0;
    var rightSum = 0;
    if (nums.length == 1)
        return false;
    var i, j;
    for (i = 0, j = nums.length - 1; i <= j;) {
        if (leftSum <= rightSum) {
            leftSum += nums[i];
            i++;
        } else {
            rightSum += nums[j];
            j--;
        }
    }
    if (rightSum == leftSum) return i;
    else return -1;
}

var arr = [1, 2, 3, 4, 5, 5];
var res = canBalance(arr);

if (res != -1) {
    console.log("Can balance at: " + res);
} else {
    console.log("Cannot be balanced");
}

// 1               n-1
// 1  ||  2    3      5
// O(n-1) == O(n) ==> Linear Time Complexity
