// Day 7 of DSA 
// Revision of week 1
// day 1
//  Q two sum 

let nums = [2, 2, 3, 15]
let target = 4

for(let i = 0; i < nums.length; i++){
    let com = target - nums[i]
    for(let j = i + 1; j < nums.length; j++){
        if(nums[j] === com){
            console.log([i, j])
        }
    }
}
// day 2 sliding window
/*
Explain the fixed-size window template in your own words:

1. When do we use it?
2. What are the exact operations every window slide does?
3. Why is this O(n) and not O(n²)?
4. What MUST stay constant in fixed-window problems?

when we use fixed window we use fixed window 
1.when problem requires fixed window in constant not shrinking it's volume like window of size k, subarray of length k the word used size = k. 
2. 1. sum -= arr[left]
2. 2. sum += arr[right]
2. 3. left++
3.becuase sliding window only updates by revmoving by 1 and  adding by 1 
each elem enter window once
and each elem leave window once
4. the window should be constant size = k constant

*/