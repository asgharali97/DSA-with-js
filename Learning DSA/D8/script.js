// Day 8 Revision
let a = 1;
let b = a++;
console.log(a, b); // 2, 1

let a1 = 1;
let b1 = ++a1;
console.log(a1, b1); // 2 , 2

// Electricity bill
// let units = Number(prompt("enter The units"));
// let bill = 0;

// if (units > 400) {
//   bill += (units - 400) * 20;
//   units = 400;
// }
// if (units > 300 && units <= 400) {
//   bill += (units - 300) * 16;
//   units = 300;
// }
// if (units > 200 && units <= 300) {
//   bill += (units - 200) * 12;
//   units = 200;
// }
// if (units > 100 && units <= 200) {
//   bill += (units - 300) * 8;
//   units = 300;
// }

// bill += units * 4
// console.log("Your bill is",bill)

// Q factorial of numbers

let n = 5
let fact = 1
for(let i = 1; i <= n; i++){
    fact = fact * i
}

console.log(fact)

// Q factors of Numbers

for(let i = 1; i <= n; i++){
    if(n % i == 0) {
        console.log(i);
    }
}

// sum of digit
let num = 1234
let sum = 0
while(num > 0){
    sum += num % 10
    num = Math.floor(num / 10)
}
console.log(sum)

// Q reverse a Number 
let nums = 12345
let rev = 0

while( nums > 0){
    let rem = nums % 10
    rev = rev * 10 + rem
    nums  = Math.floor(nums / 10)
}

console.log(rev)

// Q Print the right angle pattern 

// for(let i = 0; i <= n; i++){
//     for(let j = 0; j <= i; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// Q print the left angle pettern 

// for(let i = 0; i <= n; i++){
//     for(let j = n ; j < i; j--){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// Q mirror right angle pattern

for(let i = 1; i <= n; i++){
    for(let j = 1 ; j <= n - 1; j++){
        process.stdout.write("  ")
    }
    for(let k = 1 ; k <= i; k++){
        process.stdout.write("*  ")
    }
    console.log()
}

// Q Max Element from the array

let arr = [10, 12 ,20 , 30 ,60, 55, 80, 44]
let max = arr[0]
let min = arr[0]

for(let i = 0 ; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}

console.log(max)


// Q second Max Element from the array
let sMax = arr[0]
for(let i = 0 ; i < arr.length; i++){
    if(max < arr[i]){
        sMax = max
        max = arr[i]
    }else if(arr[i] > sMax && max != arr[i]){
        sMax = arr[i]
    }
}

console.log(sMax)

// Q second Min Element from the array
let sMin = arr[1]
for(let i = 0 ; i < arr.length; i++){
    if(min > arr[i]){
        sMin = min
        min = arr[i]
    }else if(arr[i] < sMin && min != arr[i]){
        sMin = arr[i]
    }
}
console.log(min)
console.log(sMin)

// Q left rotation by K element 

let arr1 = [1, 2, 3, 4, 5]
let k = 2
let copy = arr1[0]

for(let i = 0 ; i < arr1.length - 1; i++){
    arr1[i] = arr1[i + 1]
}

arr1[arr1.length - 1] = copy
console.log(arr1)

// Q

let p = [2, 3, 4]
let q = [5 , 6 , 1, 7]
let temp = new Array(p.length + q.length)
let i = 0, j = 0, k1 = 0 

while(i < p.length && j < q.length){
    if(p[i] < q[j]){
        temp[k1] = p[i]
        k1++
        i++
    }else{
        temp[k1] = q[j]
        k1++
        j++
    }
}

while(i < p.length){
    temp[k1] = p[i]
    k1++
    i++
}

while(j < q.length){
    temp[k1] = q[j]
    k1++
    j++
}