// Day 17 Leetcode question

// Search in rotated Sorted array
// 

function search(nums,target){
    let first = 0
    let last = nums.length - 1
    while(first <= last){
        let mid = Math.floor((first + last) / 2)
        if(nums[mid] === target) return mid
        else if(nums[first] <= nums[mid]){
            if(target >= nums[first] && target <= nums[mid]) last = mid
            else first = mid + 1
        }else{
            if(target >= nums[mid] && target <= nums[last]) first = mid + 1
            else last = mid
        }
    }
    return -1
}

let arr = [4,5,6,7,0,1,2]
let target = 0
// expected output is 4
console.log(search(arr,target));