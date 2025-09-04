// Day 4 Arrays
// let arr = new Array(3)
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40
// arr[5] = 50
// console.log(arr)

// --> accept value from user and assign in the array
// let arr = new Array(5)
// for(let i = 0; i < arr.length; i++ ){
//      arr[i] = Number(prompt('Enter a value'))
// }
// console.log(arr);

// Q sum of arrays elements

// let arr = [1, 2, 10, 20, 30]
// let sum = 0
// for(let i = 1; i < arr.length ; i++){
//     sum = sum + arr[i]
// }
// console.log(sum)

// Q MAX element from the array

// let arr = [12, 2, 25, 30, 56, 35]
// let max = arr[0]
// let min = arr[0]
// for(let i = 1; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max)

// Q MIN element from the array
// let arr = [12, 2, 25, 30, 56, 35]
// for(let i = 1; i < arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }
// console.log(min)

// Q second MAX element from the array
// let arr = [12, 2, 25, 30, 56, 35]
// let arr = [12, 2, 25, 30, 30, 30, 30]
// let max = arr[0]
// let sMax = arr[1]

// for(let i = 1; i < arr.length; i++){
//     if(max < arr[i]){
//         sMax = max
//         max = arr[i]
//     }else if(arr[i] > sMax && max != arr[i]){
//         sMax = arr[i]
//     }
// }
// console.log(sMax)
// console.log(max)

// Q second MIN element from the array
// let arr = [12, 2, 25, 30, 56, 35]
// //  let arr = [12, 2, 25, 2, 2, , 2, 12, 12, 121, 12, 12, 1];
// let min = arr[0];
// let sMin = arr[1];

// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     sMin = min;
//     min = arr[i];
//   }else if(arr[i] < sMin && min != arr[i]) {
//     sMin = arr[i]
//   }
// }

// console.log(sMin);
// console.log(min);

// Q reverse the array
// simple way but less effective

// let arr = [10, 20, 31 ,45 ,62]
// let temp = new Array(arr.length)
// let j = 0
// for(let i = arr.length -1; i >= 0; i--){
//     temp[j] = arr[i]
//     j++
// }
// console.log(temp)
// console.log(j)

// let arr = [10, 20, 31 ,45 ,62]
// let i = 0 
// let j = arr.length - 1
// while(i != j ){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }

// console.log(arr)

// Q all zeors to the left side and all ones to the right side 

// let arr = [0, 1 , 1, 0, 1, 1, 1, 1, 0 ,1, 0, 0 , 1, 1, 0 ]
// let j = 0
// let i = 0
// while(i < arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr)

let nums = [2,7,11,15]
let target = 9
let k = nums[0]
let j = nums[1]
for(let i = 1; i < nums.length; i++){
    if(k[i] + j[i] == target){
        console.log('hy')
    }
}
