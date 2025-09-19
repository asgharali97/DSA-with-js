// Day 19 leet code questions

// find the Smallest Divisor Given a Threshold leet code
// Input: nums = [1,2,5,9], threshold = 6
// Output: 5

// function isValid(nums, mid, threshold){
//     let total = 0
//     for(let i = 0; i< nums.length; i++){
//         if(nums[i]  % mid === 0) total+= nums[i]/mid
//         else total+= Math.ceil(nums[i]/mid)

//         if(total > threshold) return false
//     }
//     return true

// }

// function smallestDivisor(nums,threshold){
//     let first = 1
//     let last = 0
//     let ans = 0

//     for(let i = 0; i < nums.length; i++){
//         last = Math.max(nums[i],last);
//     }
   
//    while(first <= last){
//     let mid = Math.floor((first + last) / 2)
//     if(isValid(nums,mid,threshold)){
//         ans = mid
//         last = mid - 1
//     }else first = mid + 1
//    }
//    return ans
// }

// let nums = [1,2,5,9]
// let threshold = 6

// console.log(smallestDivisor(nums,threshold));


// Q koko eating banana leet code
// Input: arr = [3,6,7,11], h = 8
// Output: 4

function isValid(arr,speed,h){
    let totalHours = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % speed === 0 ) totalHours += arr[i]/speed;
        else totalHours += Math.ceil(arr[i]/speed);

        if(totalHours > h) return false;
    };
    return true
 }

function kokoEating(arr,h){
    let first = 1
    let last = 0
    let ans = -1
    for(let i = 0; i < arr.length; i++){
        last = Math.max(arr[i],last)
    }
    while(first <= last){
        let mid = Math.floor((first + last)/2);
        if(isValid(arr,mid,h)){
            ans = mid
            last = mid - 1
        }else first = mid + 1
    }
    return ans
}

let arr = [3,6,7,11]
let h = 8
console.log(kokoEating(arr,h));