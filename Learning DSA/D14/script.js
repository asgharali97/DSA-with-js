// // Day 14 Quick Sort Algorithm

function PvtIndex(arr, first, last) {
    let pvt = arr[first]
    let i = first + 1, j = last

    while (i <= j) {
        while (i <= last && arr[i] <= pvt) i++
        while (j >= first && arr[j] > pvt) j--
        if (i < j) {
            swap(arr, i, j)
        }
    }
    swap(arr, j, first)
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr, first, last) {
    if (first >= last) return;
    let pIdx = PvtIndex(arr, first, last)
    quickSort(arr, first, pIdx - 1)
    quickSort(arr, pIdx + 1, last)
}

let arr = [8, 2, 3, 1, 4, 12, 14, 19,]

quickSort(arr, 0, arr.length - 1)
console.log(arr)
console.log('arr', 11)