// Remove Duplicates (sorted array)  Day 3 of week 1

// let nums = [1, 1, 2, 2, 3, 4, 4, 4, 5]
// let res = []
// function removeDuplicates (){
//     if(nums.length === 0) return 0
//     for(let i = 0; i < nums.length; i++){
//         if(!res.length || res[res.length - 1] !== nums[i]){
//             res.push(nums[i])
//         }
//     }
//     for(let i =0; i < nums.length; i++){
//         nums[i] = res[i]
//     }
//     return res.length
// }

// console.log(removeDuplicates(), res)

let nums = [1, 1, 2, 2, 3, 4, 4, 4, 5]
let fast = 1
let slow = 0
function removeDuplicates (){
    if(nums.length === 0) return 0
    for(;fast < nums.length; fast++){
        if(nums[fast] !== nums[slow]){
            slow++
            nums[slow] = nums[fast]
        }
    } 
    console.log(nums)
    return slow + 1
}

console.log(removeDuplicates())