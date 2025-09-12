// Day 12 Binary Search Algorithm

let arr = [1, 3, 4, 6, 12, 16, 32, 68, 97, 123, 135];

function BinarSearch(arr, first, last, target) {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) last = last - mid;
    else first = first + mid;
  }
  return -1;
}

let index = BinarSearch(arr, 0, arr.length - 1, 68);
if (index === -1) console.log("not found");
else console.log("Target Found at " + index + " index");
