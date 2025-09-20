// Day 20 Hasing 


// Q Delete All elements with even Frequency
// let num = [10, 17, 19,10, 19, 2, 1, 7, 1, 4, 2]
// let set = new Set();

// for(let i = 0; i < num.length; i++){
//     if(set.has(num[i])){
//         set.delete(num[i])
//     }else set.add(num[i])
// }

// console.log(set)

// Q print the uniqu elements 
// let unique = new Set(num)
// console.log(unique)

// Q check if the sentence is pangram Leet code
// let sentence = 'thequickbrownfoxjumpsoverthelazydog';
// let pan = new Set();

// for(let i = 0; i < sentence.length; i++){
//     let ch = sentence.charAt(i)
//     pan.add(ch)
// }

// if(pan.size === 26) console.log(true)
//     else console.log(false);

// Q Print the frequency of each character
// let nums = [10, 12, 3, 2, 12, 3, 2, 4, 10, 7, 4, 12, 3]
// let map  = new Map();

// for(let i = 0; i < nums.length; i++){
//     // if(map.has(nums[i])){
//     //     map.set(nums[i], map.get(nums[i]) + 1)
//     // }else map.set(nums[i], 1)
//     // or we do this 
//     map.set(nums[i] ,(map.get(nums[i]) || 0) + 1)
// }
// console.log(map);

//  Q Two sum Leetcode
// brute force

// let arr = [2,7,11,15] 
// let target = 9
// function bruetForce(arr,target){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target) return [i,j]
//     }
// }
// };
// console.log(bruetForce(arr,target));

// efficent way using hasing with map
// let map = new Map();
// function twoSumEfficent(){
//     for(let i = 0; i < arr.length; i++){
//         if(map.has(target - arr[i])){
//             return [i,map.get(target - arr[i])]
//         }else map.set(arr[i],i)
//     };
// }

// console.log(twoSumEfficent(arr,target))

// Q Intersection of two Array Leet code
// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]
// let set = new Set(nums1)
// let ans = []
// for (let i = 0; i < nums2.length; i++) {
//     if (set.has(nums2[i]) && !ans.includes(nums2[i])) {
//         ans.push(nums2[i])
//     }
// }
// console.log(ans)