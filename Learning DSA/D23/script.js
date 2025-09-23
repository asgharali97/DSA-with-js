// Day 22 revsion of day 4,5
// D4
// Q sum of arrays elements
// let arr = [1, 2, 3, 4, 5];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

// Q MAX element from the array
// let maxArr = [18, 20, 30, 44, 50, 3, 92, 95]
// let max = maxArr[0]

// for (let i = 0; i < maxArr.length; i++) {
//     if (maxArr[i] > max) {
//         max = maxArr[i]
//     }
// }
// console.log(max);

// Q MIN element from the array
// let min = maxArr[0];
// for (let i = 0; i < maxArr.length; i++) {
//     if (min > maxArr[i]) {
//         min = maxArr[i]
//     }
// }
// console.log(min);

//  Q second MAX element from the array
// let sMax = maxArr[1];
// for (let i = 0; i < maxArr.length; i++) {
//     if (maxArr[i] > max) {
//         sMax = max
//         max = maxArr[i]
//     } else if (maxArr[i] > sMax && maxArr[i] !== max) {
//         sMax = maxArr[i]
//     }
// }
// console.log(`the max is ${max} and the second Max is ${sMax}`);

// Q second MIN element from the array
// let sMin = maxArr[1];
// for (let i = 0; i < maxArr.length; i++) {
//     if (min > maxArr[i]) {
//         sMin = min;
//         min = maxArr[i]
//     } else if (sMin > maxArr[i] && maxArr[i] !== min) {
//         sMin = maxArr[i]
//     }
// }
// console.log(`the Min is ${min} and the second Min is ${sMin}`);

// Q reverse the array
// let arr1 = [1, 2, 3, 4]
// let temp = new Array(arr1.length);
// let j = 0

// for (let i = arr1.length - 1; i >= 0; i--) {
//     temp[j] = arr[i]
//     j++
// }
// console.log(temp);

// --> optimized way 
// let arr2 = [10,20,30,40]
// let i = 0
// let k = arr2.length - 1
// while (i < k) {
//     let temp = arr2[i]
//     arr2[i] = arr2[k]
//     arr2[k] = temp
//     i++
//     k--
// }
// console.log("rev", arr2);

// Q all zeors to the left side and all ones to the right side 

// let arr = [0, 1 , 1, 0, 1, 1, 1, 1, 0 ,1, 0, 0 , 1, 1, 0 ]
// let i = 0
// let j = 0

// while(i < arr.length){
//     if(arr[i] === 0){
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr);                   

// +++ D5 +++
// Q left and right rotation by 1
// --> left rotation by 1
let arr = [1, 2, 3, 4, 5]
// let copy = arr[0]

// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i] + 1
// }
// arr[arr.length - 1] = copy
// console.log(arr);

//  --> right rotation by 1
// let copy = arr[arr.length-1]
// for(let i = arr.length - 1 ; i > 0 ; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy
// console.log(arr);

// Q right and left rotation by k element
// --> left rotation by k element
// -->brute force
// let k = 2
// k % arr.length
// for(let j = 0; j < k; j++){
//     let copy = arr[0];
//     for(let i = 0 ; i < arr.length - 1; i++){
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr);

// --> right rotation by k element
// -->brute force
// for(let i = 1 ; i < k; i++){
//     let copy = arr[arr.length-1]
//     for(let j = arr.length - 1 ; j > 0; j--){
//         arr[j] = arr[j - 1];
//     }
//     arr[0] = copy
// }
// console.log(arr);
// --> left rotation by k element
// --> optimized way 

// let temp = new Array(arr.length)
// for(let i = 0; i < arr.length; i++){
//     temp[i] = arr[(i + k) % arr.length]
// }

// console.log(temp);

// --> right rotation by k element
// --> optimized way

// let temp = new Array(arr.length);
// for(let i = 0; i < arr.length; i++){
//     temp[(i + k) % arr.length] = arr[i]
// }
// console.log(temp);

//  Q remove duplicates from sorted array

// let sArr = [0, 0, 1, 1, 1, 2, 2, 3]
// let j = 1

// for(let i = 0; i < sArr.length - 1; i++){
//     if(sArr[i] !== sArr[i + 1]){
//         sArr[j] = sArr[i + 1] 
//         j++
//     }
// }
// console.log(j,sArr);

// Q merge two sorted array
// let arr1 = [2, 3, 5];
// let arr2 = [1, 4, 6, 8];
// let merge = new Array(arr1.length + arr2.length)
// let i = 0
// let k = 0
// let j = 0
// while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//         merge[k++] = arr1[i++]
//     }else{
//         merge[k++] = arr2[j++]
//     }
// }

// while(i < arr1.length){
//     merge[k++] = arr1[i++]
// }
// while(j < arr2.length){
//     merge[k++] = arr2[j++]
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

// console.log(maxProfit);

// Q sort the color
let colors = [2, 0, 2, 1, 1, 0];
let i = 0
let j = 0
let k = colors.length - 1

while (i <= j){
    if(colors[i] === 0){
        let temp = colors[i]
        colors[i] = colors[j]
        colors[j] = temp
        j++
        i++
    }else if(colors[i] === 1){
        i++
    }else{
        let temp = colors[i]
        colors[i] = colors[k]
        colors[k] = temp
        k--
    }
}
console.log(colors);


// Q Maximum subarray /Kadane's algorithm

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = 0
let max = -Infinity
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(sum,max)

    if(sum < 0){
        sum = 0
    }
}
console.log(sum);