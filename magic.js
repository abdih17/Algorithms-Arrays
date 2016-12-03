// 2. A magic index in an array A[0…n-1] is defined to be an index
// such that A[i] = i. Given a sorted array of distinct integers, write
// a method to find a magic index if one exists, in an array A.
// FOLLOW UP: What if the values are not distinct?
// Answer to follow-up => Just check for A[A[0]] with A[0] ;)
// ..
// Time Complexity: O(N)

var found = false;
var i = 1;

var magic = function(arr) {
    for (i; i < arr.length; i++) {
        if (arr[i] === i) {
            found = true;
            break;
        }
    }
}

// # test array
var arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8, 12];
// # call the function
magic(arr);

if (found) {
    console.log("Found at " + i + "th index");
} else {
    console.log("Nopes")
}
