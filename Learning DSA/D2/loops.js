// Day 2 loops
// Q print n number 
// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     for(let i = 1 ; i <= n ; i++){
//         console.log(i)
//     }
// }

// Q print n number in reverse order
// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     for(let i = 1 ; i <= n ; i++){
//         console.log(n - i + 1)
//     }
// }

// Q some of n natural numbers

// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     if(n>0){
//         let sum = 0
//         for(let i = 1; i <= n; i++){
//             sum = sum + i
//         }
//         console.log(sum)
//     }else{
//         console.log('invalid value')
//     }
// }

// Q factorial of n numbers

// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     if(n>0){
//         let sum = 1
//         for(let i = 1; i <= n; i++){
//             sum = sum * i
//         }
//         console.log(sum)
//     }else{
//         console.log('invalid value')
//     }
// }

// Q factors of numbers
// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     if(n>0){
//         for(let i = 1; i <= n; i++){
//             if(n % i === 0){
//                 console.log(i)
//             }
//         }
//     }else{
//         console.log('invalid value')
//     }
// }

// Q while Loop sum of digit

// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     if(n>0){
//         let sum = 0
//         while(n > 0){
//             sum += n % 10
//             n = Math.floor(n / 10)
//         }
//         console.log(sum)
//         }else{
//         console.log('invalid value')
//     }
// }

// Q Reverse a number

// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     let rev = 0
//     while(n > 0){
//         let rem = n % 10
//         rev = rev * 10 + rem
//         n = Math.floor(n / 10)
//     }
//     console.log(rev)
// }

// Q Strong Number

// let n = Number(prompt('enter the number'))

// if(isNaN(n)){
//     console.log('invalid value')
// }else{
//     if(n>0){
//         let sum = 0
//         let copy = n
//         while(n > 0){
//             let rem = n% 10
//             let fact = 1
//             for(let i = 1; i <= rem; i++){
//                 fact = fact * i
//             }
//             sum += fact
//             n = Math.floor(n / 10)
//         }
//         if(copy === sum){
//             console.log('strong number')
//         }else{
//             console.log('not strong number')
//         }
//     }else{
//         console.log('invalid value')
//     }
// }

let arr = [2, 8, 6, 12, 2, 4, 2, 8, 4, 6, 2, 4, 12]
let map = new Map()

for(let i = 0; i < arr.length; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i]) + 1)
    }else map.set(arr[i], 1)
}

console.log(map)