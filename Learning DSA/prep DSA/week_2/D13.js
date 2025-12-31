// Day 13 of DSA 
// problem: Contains Duplicate 

let nums = [1, 2, 3, 1]

function containDup(nums){
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
        }
        return false
    }

console.log(containDup(nums))