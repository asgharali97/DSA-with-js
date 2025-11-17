// Q solve the Two Sum 
let nums = [2, 7, 11, 15]
let target = 9
// → Output: [0,1]
// using complement (Brute force)
for (let i = 0; i < nums.length; i++) {
    let com = target - nums[i]
    // console.log(i)
    let j = nums.indexOf(com, i + 1)
    if (j !== -1) {
        console.log([i, j])
        break
    }
}
// using nested loop (Brute force)
for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
            console.log([i, j])
        }
    }
}
// using hashing Map
let map = new Map()

for(let i = 0; i < nums.length; i++){
    if(map.has(target - nums[i])){
        console.log([i,map.get(target - nums[i])])
    }else map.set(nums[i],i)
}

// Alternative approach Two-Pointer but it works on only sorted array
function twoSumSorted(nums, target) {
    const sortedNumsWithIndices = nums.map((num, index) => ({ num, index }));
    sortedNumsWithIndices.sort((a, b) => a.num - b.num);

    let left = 0;
    let right = sortedNumsWithIndices.length - 1;

    while (left < right) {
        const currentSum = sortedNumsWithIndices[left].num + sortedNumsWithIndices[right].num;

        if (currentSum === target) {
            // Return the original indices
            return [sortedNumsWithIndices[left].index, sortedNumsWithIndices[right].index];
        } else if (currentSum < target) {
            left++; // Increase sum
        } else {
            right--; // Decrease sum
        }
    }

    // If no solution is found
    return [];
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Original array: [${nums1}], Target: ${target1}`);
console.log(`Indices: ${twoSumSorted(nums1, target1)}`); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Original array: [${nums2}], Target: ${target2}`);
console.log(`Indices: ${twoSumSorted(nums2, target2)}`); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(`Original array: [${nums3}], Target: ${target3}`);
console.log(`Indices: ${twoSumSorted(nums3, target3)}`); // Output: [0, 1]

const nums4 = [1, 2, 3, 4, 5];
const target4 = 10;
console.log(`Original array: [${nums4}], Target: ${target4}`);
console.log(`Indices: ${twoSumSorted(nums4, target4)}`); // Output: []
