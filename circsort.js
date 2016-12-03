// 3. Given a sorted array of n integers that has been rotated an
// unknown number of times, write code to find an element in the array.
// You may assume that the array was originally sorted in increasing order.
// Time Complexity: O(log N)

// l-> low, h-> high
// Returns index of key in arr[l..h] if key is present,
// otherwise returns -1
var search = function(arr, l, h, key) {
    if (l > h) {
        return -1;
    }

    var mid = parseInt((l + h) / 2);
    if (arr[mid] == key) return mid;

    /* If arr[l...mid] is sorted */
    if (arr[l] <= arr[mid]) {
        /* As this subarray is sorted, we can quickly
           check if key lies in half or other half */
        if (key >= arr[l] && key <= arr[mid])
            return search(arr, l, mid - 1, key);

        return search(arr, mid + 1, h, key);
    }

    /* If arr[l..mid] is not sorted, then arr[mid... r]
       must be sorted*/
    if (key >= arr[mid] && key <= arr[h])
        return search(arr, mid + 1, h, key);

    return search(arr, l, mid - 1, key);
}

var arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
var key = 1
var i = search(arr, 0, arr.length - 1, key);
if (i != -1) {
    console.log("Found at: " + (i + 1) + "th position");
} else {
    console.log("Not found");
}
