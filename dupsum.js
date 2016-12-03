// 4. Given an array that contains numbers from 1 to n-1
// and exactly 1 duplicate, find that duplicate.

var n = 11;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

var orig_sum = (n * (n - 1)) / 2;
var new_sum = 0;

for (var i = arr.length - 1; i >= 0; i--) {
    new_sum += arr[i];
}

var result = new_sum - orig_sum;
console.log("Duplicate number is: " + result);




//////////

// X = [1 2 3 4 5 6 7 8 8 9 10], S_x = 63
// Y = [1 2 3 4 5 6 7 8 9 10], S_y = N*(N+1)/2 = 55

// dup = S_x - S_y = 8

// Time: O(1)

//  Approach 1: Go linearly, loop and comparsion to the adjacent
//  Time: O(N)

//  Approach 2: Hash table
//  Time: O(N)
//    {1:1, 2:1, 3: 1, 4:1, 5:1, 6:1 ...}
