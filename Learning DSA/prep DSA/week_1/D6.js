// Day 6 of DSA
// Prefix Sum Basics 
// Q Subarray Sum Equals K

// let arr = [2,3,1,5,1,4]
// let k = 6
// let count = 0
// for(let i = 0; i < arr.length; i++){
//     let sum = 0
//     for(let j = i; j < arr.length; j++){
//         sum += arr[j]
//         if(sum === k){
//             count++
//         }
//     }
// }
// console.log(count)

// Optimize solutation using hashMap
let arr = [2, 3, 1, 5, 1, 4]
let k = 6
let map = new Map()
let ans = 0
let sum = 0
map.set(0, 1)
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (map.has(sum - k)) {
        ans += map.get(sum - k)
    }
    map.set(sum, (map.get(sum) || 0) + 1)
}
console.log(ans);