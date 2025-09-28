// Day 28 dsa revesion of day 13, 14 and 15

// D13 Merge Sort
// Q merge sort
// function conqour(arr, first, mid, last) {
//     let temp = new Array(last - first + 1)
//     let i = first, j = mid + 1, k = 0

//     while (i <= mid && j <= last) {
//         if (arr[i] < arr[j]) {
//             temp[k++] = arr[i++]
//         } else temp[k++] = arr[j++]
//     }

//     while (i <= mid) {
//         temp[k++] = arr[i++]
//     }
//     while (j <= last) {
//         temp[k++] = arr[j++]
//     }

//     let p = 0, s = first
//     while (p < temp.length) {
//         arr[s++] = temp[p++]
//     }
// }


// function divide(arr, first, last) {
//     if (first >= last) return
//     let mid = Math.floor((first + last) / 2)
//     divide(arr, first, mid)
//     divide(arr, mid + 1, last)
//     conqour(arr, first, mid, last)
// }

// let arr = [7, 3, 5, 2, 6, 8, 1, 4, 9]

// divide(arr, 0, arr.length - 1)
// console.log(arr);

// ++++++ D14 Quick Sort Algorithm ++++++
// Q Quick Sort

function PvtIndex(arr, first, last) {
    let pvt = arr[first];
    let i = first + 1, j = last

    while (i <= j) {
        while (i <= last && arr[i] <= pvt) i++
        while (j >= first && arr[j] > pvt) j--
        if (i < j) {
            swap(arr, i, j)
        }
    }
    swap(arr, j, first)
    return j
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr, first, last) {
    if (first >= last) return;
    let pvtIdx = PvtIndex(arr, first, last)
    quickSort(arr, first, pvtIdx - 1)
    quickSort(arr, pvtIdx + 1, last)
}

let nums = [9, 3, 4, 6, 8, 2, 5, 1, 7]
quickSort(nums, 0, nums.length-1)
console.log(nums);

// ++++ D15 Cyclic Sort Alogrithm ++++
// Q cyclic sort

let arr = [8, 4, 3, 7, 1, 9, 5, 2, 6]
let i = 0

while(i < arr.length){
    let correctIndex = arr[i] - 1
    if(arr[correctIndex] != arr[i]){
        let temp = arr[i]
        arr[i] = arr[correctIndex]
        arr[correctIndex] = temp
    }else i++
}
console.log("cyclic sort algo ",arr);

// Q Missing Number : LeetCode
let num = [0,1,3]


while(i < num.length){
    let correctIndex = num[i] - 1;
    if(num[correctIndex] != num[i] && num[i] != num.length){
        let temp = num[i]
        num[i] = num[correctIndex]
        num[correctIndex] = temp
    }else i++
}

for(let j = 0; j < num.length; j++){
    if(j != num[j]){
        console.log(j);
        return j
    }
}
