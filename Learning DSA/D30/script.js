// Day 30 dsa revesion of day 19, 20 and 21

// D19 leet code questions

// Q find the Smallest Divisor Given a Threshold leet code

// function isValid(nums, mid, threshold) {
//     let total = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % mid === 0) total += nums[i] / mid
//         else total += Math.ceil(nums[i] / mid)

//         if (total > threshold) return false
//     }
//     return true
// }

// function smallestDivisor(nums, threshold) {
//     let first = 1
//     let last = 0
//     let ans = 0

//     for (let i = 0; i < nums.length; i++) {
//         last = Math.max(nums[i], last)
//     }

//     while (first <= last) {
//         let mid = Math.floor((first + last) / 2)
//         if (isValid(nums, mid, threshold)) {
//             ans = mid
//             last = mid - 1
//         } else first = mid + 1
//     }
//     return ans
// }

// let nums = [1, 2, 5, 9]
// let threshold = 6

// console.log(smallestDivisor(nums, threshold));


// Q koko eating banana leet code

// function isValid(arr,speed,h){
//     let totalHours = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % speed === 0) totalHours += arr[i]/speed 
//         else totalHours+= Math.ceil(arr[i]/speed)

//         if(totalHours > h) return false
//     }
//     return true
// }

// function kokoEating(arr,h){
//     let first = 1
//     let last = 0
//     let ans = 0

//     for(let i = 0; i < arr.length; i++){
//             last = Math.max(arr[i],last)
//     }

//     while(first <= last){
//         let mid = Math.floor((first + last) / 2)
//         if(isValid(arr,mid,h)){
//             ans = mid
//             last = mid - 1
//         }else first = mid + 1
//     }
//     return ans 
// }

// let arr = [3,6,7,11]
// let h = 8
// console.log(kokoEating(arr,h));

// +++ D20 Hasing +++

// Q Delete All elements with even Frequency

// let nums = [10, 17, 19,10, 19, 2, 1, 7, 1, 4, 2]
// let set = new Set();

// for(let i = 0; i < nums.length; i++){
//     if(set.has(nums[i])){
//         set.delete(nums[i])
//     }else set.add(nums[i])
// }

// console.log(set);

// Q print the uniqu elements 
// let unique = new Set(nums)
// console.log(unique);

// Q check if the sentence is pangram Leet code
// let sentence = 'thequickbrownfoxjumpsoverthelazydog';
// let pan = new Set();

// for(let i = 0; i < sentence.length; i++){
//     let ch = sentence.charAt(i)
//     pan.add(ch)
// }

// if(pan.size === 26) console.log(true);
// else console.log(false);

// Q Print the frequency of each character

// let nums = [10, 12, 3, 2, 12, 3, 2, 4, 10, 7, 4, 12, 3]
// let map = new Map()

// for(let i = 0; i < nums.length; i++){
//     if(map.has(nums[i])){
//         map.set(nums[i], map.get(nums[i]) + 1)
//     }else map.set(nums[i],1)
// }

// console.log(map);

//  Q Two sum Leetcode
// brute force

// let arr = [2,7,11,15] 
// let target = 9
// function bruteForetwoSum(arr,target){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target) return [i,j]
//         }
//     }
// }

// console.log(bruteForetwoSum(arr,target));
// let map = new Map()
// function twoSumEfficent(arr,target){
//     for(let i = 0 ; i < arr.length; i++){
//         if(map.has(target - arr[i])){
//             return [i,map.get(target - arr[i])]
//         }else map.set(arr[i],i)
//     }
// }
// console.log(twoSumEfficent(arr,target));

// Q Intersection of two Array Leet code
// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]

// let set = new Set(nums1)
// let ans = []
// for(let i = 0; i < nums2.length; i++){
//     if(set.has(nums2[i]) && !ans.includes(nums2[i])){
//          ans.push(nums2[i])
//     }
// }
// console.log(ans);

// +++ D21 questions on hashing +++

// Q Longest Subarray with Sum K
let arr = [10, 5, 2, 7, 1, -10]
let k = 15

function longestSubArray(arr,k){
    let map = new Map()
    let sum = 0
    let longest = 0

    map.set(sum,-1)
    for(let i = 0 ; i < arr.length; i++){
        sum+= arr[i]
        if(map.has(sum - k)){
            if(i - map.get(sum - k) > longest){
                longest = i - map.get(sum - k)
            }
        }
        if(!map.has(sum)) map.set(sum,i)
    }
    return longest
}

console.log(longestSubArray(arr,k));

// Q Longest Consecutive Sequence
let nums = [100, 4, 200, 1, 3, 2]

function longsestCon(nums){
    let set = new Set(nums)
    let longest = 0

    for(let a of set){
        if(!set.has(a - 1)){
            let curr = a
            let length = 1
            while(set.has(curr + 1)){
                curr++
                length++
            }
            longest = Math.max(longest,length)
        }
    }
    return longest
}

console.log(longsestCon(nums));