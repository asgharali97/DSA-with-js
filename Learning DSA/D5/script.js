// Day 5 Advance array
// Q left and right rotation by 1
// --> left rotation by 1

let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;

// console.log(arr) // [ 2, 3, 4, 5, 1 ]
// let copy1 = arr[arr.length-1]
// --> right rotation by 1
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy1;

// console.log(arr) // [ 5, 1, 2, 3, 4 ]

// Q right and left rotation by k element

// --> left rotation by k element
// [1, 2, 3, 4, 5]
// k = 2
// output =  [ 3, 4, 5, 1, 2]
// let say we do left rotaion by 1
// [2, 3, 4, 5, 1]
// now we rotate it also by 1
// [3, 4, 5, 1, 2] // the output come same
let k = 2;
// k % arr.length; // we are doing this because if k value is greater than arr.lenth it should be % with arr.length what answer we get it will loop on it
// like k = 6 --> k % arr.length --> we get 2 answer --> so it will loop 2 times

// this method is brot force basic not effecent
// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);

// this method is good
let temp = new Array(arr.length);
// for(let i = 1; i < arr.length - 1; i++){
//     temp[i] = arr[(i+k) % arr.length]
// }
// console.log(arr)

// --> right rotation by k element
// input =  [1, 2, 3, 4, 5]
// output = [4, 5, 1, 2, 3]

// --> Normal method basic
// for(let j = 1; j <= k; j++ ){
//   let copy = arr[arr.length - 1]
//   for(let i = arr.length - 1; i > 0; i--){
//     arr[i] = arr[i - 1]
//   }
//   arr[0] = copy
// }

// console.log(arr)

// --> Efficient method

// for (let i = 0; i < arr.length; i++) {
//   temp[(i + k) % arr.length] = arr[i];
// }

// console.log(temp);

// Another good way to do this

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// reverse(0, k - 1)
// reverse(0, arr.length - 1)
// reverse(k, arr.length - 1)
// console.log('ar',arr)

// Q remove duplicates from sorted array

// let nums = [0, 0, 1, 1, 1, 2, 2, 3]
// let j = 1

// for(let i = 0 ; i < arr.length; i++){
//     if(nums[i] !== nums[i + 1]){
//        nums[j] = nums[i + 1]
//        j++
//     }
// }

// console.log(j,nums)

// Q merge sorted arrays
// let arr1 = [2, 3, 5];
// let arr2 = [1, 4, 6, 8];
// let merge = new Array(arr1.length + arr2.length);
// i = 0;
// j = 0;
// k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     merge[k++] = arr1[i++];
//   } else {
//     merge[k++] = arr2[j++];
//   }
// }
// while (i < arr1.length) {
//   merge[k++] = arr1[i++];
// }
// while (j < arr2.length) {
//   merge[k++] = arr2[j++];
// }

// console.log(merge);

// Q best time to buy and sell the stocks
// let prices = [7, 1, 5, 3, 6, 4];
// let min = prices[0]
// let maxProfit = 0

// for(let i = 0; i < prices.length; i++){
//     if(prices[i] < min){
//         min = prices[i]
//     }
//     let profit = prices[i] - min
//     maxProfit = Math.max(maxProfit,profit)
// }
// console.log(maxProfit) // 5

// Q sort the color
// Input = [2,0,2,1,1,0]
// Output = [0,0,1,1,2,2]

// let colors = [2, 0, 2, 1, 1, 0];
// let j = 0;
// let i = 0;
// let k1 = colors.length - 1;

// while (i <= j) {
//   if (colors[i] == 0) {
//     let temp = colors[i];
//     colors[i] = colors[j];
//     colors[j] = temp;
//     j++;
//     i++
//   }
//   else if(colors[i] == 1){
//     i++
//   }else {
//     let temp = colors[i];
//     colors[i] = colors[k1];
//     colors[k1] = temp;
//     k1--;
//   }
// }

// console.log(colors);

// Q Maximum subarray /Kadane's algorithm
// Input = [-2,1,-3,4,-1,2,1,-5,4]
// Output = 6

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let sum = 0;
// let max = -Infinity;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
//   max = Math.max(sum, max);

//   if (sum < 0) {
//     sum = 0;
//   }
// }
// console.log(sum);


// Q Majority Element/Moor's voting algo
// Input = [2,2,1,1,1,2,2]
// Output=  2

// let nums = [2,2,1,1,1,2,2]
// let count = 1
// let ans = nums[0];

// for(let i = 1; i < nums.length; i++){
//     if(count === 0){
//        ans = nums[i]
//        count = 1
//     }else if(ans === nums[i] ) count++
//     else count--
// }

// console.log(ans)

// Q Trapping rain Water
Input= [4,2,0,3,2,5]
Output = 9

let height = [4,2,0,3,2,5]
let left = new Array(height.length);
let right = new Array(height.length);
let maxLeft = height[0]; 
let maxRight = height[height.length-1]
left[0] = maxLeft , right[right.length-1] = maxRight
for(let i = 1; i < height.length; i++){
    maxLeft = Math.max(maxLeft, height[i])
    left[i] = maxLeft
}

for(let i = height.length - 2; i >=0; i--){
    maxRight = Math.max(maxRight,height[i])
    right[i] = maxRight
}
let ans = 0
for(let i = 0; i<height.length; i++){
   ans += Math.min(left[i], right[i] )  - height[i];
}

console.log(ans)