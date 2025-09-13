// Day 13 Merge Sort

function conqour(arr, first, mid, last) {
    let temp = new Array(last - first + 1) // formula of getting length of array last - first + 1
    let i = first, j = mid + 1, k = 0
    
    while (i <= mid && j <= last) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++]
        } else temp[k++] = arr[j++]
    }

    while (i <= mid) {
        temp[k++] = arr[i++]
    }
    while (j <= last) {
        temp[k++] = arr[j++]
    }
    // Now adding all temp elements to the arr
    let p = 0, s = first
    while (p < temp.length) {
        arr[s++] = temp[p++]
    }
}

function divide(arr, first, last) {
    if(first >= last) return 
    let mid = Math.floor((first + last) / 2) // formula of getting mid value of arr first + last / 2 that we see also in binary search 
    divide(arr, first, mid);
    divide(arr, mid + 1, last);
    conqour(arr, first, mid, last)
}

let arr = [1, 2, 8, 9, 4, 5, 12, 20]

divide(arr, 0, arr.length-1)
console.log(arr)