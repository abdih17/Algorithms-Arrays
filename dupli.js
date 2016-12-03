// 1. Find the element that appears once in a sorted array where all other
// elements appear twice one after another.
// Find that element in 0(logn) complexity.

var search = function(arr, low, high) {

    // # Base cases
    if (low > high) return 0;
    if (low == high) return arr[low];
    // # Find the middle point
    mid = low + (high - low) / 2;
    // # If mid is even and element next to mid is
    // # same as mid, then output element lies on
    // # right side, else on left side
    if (mid % 2 == 0) {
        if (arr[mid] == arr[mid + 1])
            return search(arr, mid + 2, high);
        else
            return search(arr, low, mid);
    } else {
        // # if mid is odd
        if (arr[mid] == arr[mid - 1])
            return search(arr, mid + 1, high);
        else
            return search(arr, low, mid - 1);
    }
}

// # Test Array
var arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];

var result = search(arr, 0, arr.length - 1);
if (result) {
    console.log("The required element is " + result);
} else {
    console.log("Invalid Array");
}
