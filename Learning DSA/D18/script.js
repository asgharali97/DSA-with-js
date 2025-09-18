// Day 18 leetCode questions

//  Q Allocate Minimum Pages
function findPages(arr, k){
        if(k > arr.length) return -1;
        let first = 0;
        let last = 0;
        let ans = -1;
        for(let i = 0; i < arr.length; i++){
            first = Math.floor(arr[i],first)
            last += arr[i]
        }
        while(first <= last){
            let mid = Math.floor((first + last)/2)
            if(isValid(arr,mid,k)){
                ans = mid;
                last = mid - 1;
            }else first = mid + 1
        }
        return ans
    }


function isValid(arr,mid,k){
    let numsOfStudent = 1
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + sum > mid){
            numsOfStudent++;
            sum = arr[i]
            if(numsOfStudent > k) return false
        }else sum += arr[i]
    }
    return true
}

let arr = [12, 34, 67, 90]
let k = 2
console.log(findPages(arr,k))
