// 5. Search an element in an array where the difference
// between adjacent elements is 1.
// Time Complexity: O(N)
// TO HCeck out: Asymptotic Complexity

// x is the elmenet to be searched in arr[0..n-1]
var search = function(arr, n, x) {
    // Traverse the given array starting from leftmost element
    var i = 0;
    while (i < n) {
        // If x is found at index i
        console.log(i);
        if (arr[i] == x)
            return i;
        // Otherwise:
        // Jump the difference between current
        // array element and x
        i = i + Math.abs(arr[i] - x);
    }

    console.log("number is not present!");
    return -1;
}

var arr = [8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3];
var x = 3;
console.log("Found at index " + search(arr, arr.length, x));
