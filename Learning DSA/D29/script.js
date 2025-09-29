// Day 28 dsa revesion of day 16, 17 and 18
//  D16 Search Insert Position

// Q leetcode Search Insert Position
let arr = [1, 3, 5, 6]
let target = 5
function searchInsert(arr, t) {
    let first = 0
    let last = arr.length - 1

    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (arr[mid] === t) return mid
        else if (arr[mid] < t) first = mid + 1
        else last = mid - 1
    }
    return first
}

console.log(searchInsert(arr, target));


// ++++ D17 Leetcode question ++++

// Q Search in rotated Sorted array

function search(arr, t) {
    let first = 0
    let last = arr.length

    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (arr[mid] === t) return mid
        else if (arr[first] <= arr[mid]) {
            if (t >= arr[first] && t <= arr[mid]) last = mid
            else first = mid + 1
        } else {
            if (t > arr[mid] && t <= arr[last]) first = mid + 1
            else last = mid
        }
    }
    return -1
}

let num = [4, 5, 6, 7, 0, 1, 2]
let tar = 0
console.log(search(num, tar));

// ++++ D18 leetCode questions ++++

//  Q Allocate Minimum Pages
function findPages(arr, k){
     if(k > arr.length) return -1;
    let first = 0
    let last = 0
    let ans = -1

    for(let i = 0; i < arr.length; i++){
        first = Math.floor(arr[i],first) 
        last += arr[i]
    }

    while(first <= last){
        let mid = Math.floor((first + last) / 2)
        if(isValid(arr,mid,k)){
            ans = mid
            last = mid - 1
        }else first = mid + 1
    }
    return ans
}

function isValid(arr,mid,k){
    let numsOfStudent = 1
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + sum > mid){
            numsOfStudent++
            sum= arr[i]
            if(numsOfStudent > k) return false
        }else sum += arr[i]
    }
    return true
}


let pages = [12, 34, 67, 90]
let k = 2
console.log(findPages(pages, k))