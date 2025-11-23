// Sliding windwo Day 2 of Week 1
// example fixed sliding window 
// let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
// let k = 4
// [1, 4, 2, 10]
// [4, 2, 10, 23]
// [2, 10, 23, 3]
// [10, 23, 3, 1]
// [23, 3, 1, 0]
// [3, 1, 0, 20]

// Q longest subarray <= k sum 
// let arr = [2, 1, 5, 1, 3, 2]
// let k = 7
// let left = 0
// let right = 0
// let sum = 0
// let maxlen = 0

// for (; right < arr.length; right++) {
//     sum += arr[right]
//     if(sum <= k){
//         maxlen = Math.max(maxlen,right - left + 1)
//     }else {
//         while(sum > k){
//             sum -= arr[left]
//             left++
//         }
//     }
// }

// console.log(arr.slice(left, right+1))
// console.log(maxlen)
// console.log(sum)

// Q Maximum sum of any subarray of size K
// let arr = [2, 1, 5, 1, 3, 2]
// let k = 3
// let left = 0
// let sum = 0
// let maxSum = 0

// for(let i = 0; i < k; i++){
//     sum += arr[i]
// } 
// for(let right = k; right < arr.length; right++){
//     sum = sum - arr[left] + arr[right]
//     left++
//     maxSum = Math.max(maxSum, sum)
// }

// console.log(maxSum)
let nums = [1, 2, 1, 2, 1]
let k = 3
let sum = 0
let map = new Map();
let count = 0
map.set(sum, 1)
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    console.log(sum)
    console.log(map.has(sum -k))
    if (map.has(sum - k)) {
        count += map.get(sum - k)
    }
    map.set(sum, (map.get(sum) || 0) + 1)
}
return count