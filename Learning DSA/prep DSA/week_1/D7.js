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


→ Move to variable window revision now.

Answer this in one sharp line:

When exactly do we shrink the variable window?

we shrink the variable window when it don't match the condition of the problem 

we shrink the variable window when condition become invalid when condtion become false shrink untill it becomes true

*/

// Q Longest Substring Without Repeating Characters
let str = 'abcbbcac'
let left = 0
let map = new Map()
let max = 0
for(let right = 0; right < str.length; right++){
    let char = str[right]
    if(map.has(char) && map.get(char) >= left){
        left = map.get(char) + 1
    }
    map.set(char, right)
    max = Math.max(max, right - left + 1)
}

console.log(map);
console.log(max);

