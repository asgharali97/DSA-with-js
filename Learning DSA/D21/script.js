// Day 21 questions on hashing

// Q Longest Subarray with Sum K
let arr = [10, 5, 2, 7, 1, -10]
let k = 15
function longestSubArray(arr, k) {
    let map = new Map();
    let longest = 0
    let sum = 0
    map.set(sum, -1)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (map.has(sum - k)) {
            if (i - map.get(sum - k) > longest) {
                longest = i - map.get(sum - k)
            }
        }
        if (!map.has(sum))
            map.set(sum, i)
    }
    return longest
}

console.log(longestSubArray(arr, k))

// Q Longest Consecutive Sequence
let nums = [100, 4, 200, 1, 3, 2]

function longsestCon(nums) {
    let set = new Set(nums);
    let longest = 0

    for (let a of set) {
        if (!set.has(a - 1)) {
            let curr = a
            let length = 1
            while (set.has(curr + 1)) {
                curr++
                length++
            }
            longest = Math.max(longest, length)
        }
    }
    return longest
}

console.log(longsestCon(nums));