// Cyclic Sort Alogrithm 

let arr = [8, 4, 3, 7, 1, 9, 5, 2, 6]
let i = 0

// while(i < arr.length){
//     let correctIndex = arr[i] - 1
//     if(arr[correctIndex] != arr[i]){
//         let temp = arr[i]
//         arr[i] = arr[correctIndex]
//         arr[correctIndex] = temp
//     }else i++
// }

// console.log(arr)

// Missing Number : LeetCode
let nums = [0,1,3]

while(i , nums.length){
    let correctIndex = nums[i]
    if(nums[correctIndex] != nums[i] && nums[i] < nums.length){
        let temp = nums[i]
        nums[i] = nums[correctIndex]
        nums[correctIndex] = temp 
    }else i++
}

for(let j = 0; j < nums.length; j++){
    if(j != nums[j]){
        console.log(j)
        return j
    }        
}

// Disappered Numbers 

