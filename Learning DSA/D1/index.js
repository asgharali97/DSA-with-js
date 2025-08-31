// Day 1
// Dsa practice
// variables , opreators,operation on operator

// Q sum of two integers
let a = 4
let b = 5

console.log(a + b)
// Q sum of message and integer
let c = 10
let d = 20

console.log('sum of 10 and 20 is :' + (c + d))

// type corsion 
console.log('10' + 10) // 1010
console.log("10" - 10) // 0
console.log(10 * "10") // 100
console.log(10 / "10") // 1
console.log(10 % "10") // 0

// Q swap two variables via 3 methods
// Method 1
let j = 30
let k = 40
let l = j + k
console.log(l)
//  Method 2
let m = 30
let n = 40
let p = m // 30
m = n // 40
n = p // 30 

console.log(m, n)
// Method 3
let w = 2
let e = 4

let o =  [w, e] = [e, w]

console.log(o)

//  Q

let i = 10
i = i++ + ++i
// i = i++ value hoja rhi ha 10
// let i = hoja rhi ha 11
//  i = i++ 10 hoi or jab + ++i kre gan to 11 + 11 = 22
console.log(i)

// what do the i++ and ++i 
// the i++ will increment the value of i by 1 but change when it use 
// the ++i will increment the value of i by 1 and also change it when it use
// here is example

let a1 = 1
let b1 = a1++
console.log(b1,a1) // b1 = 1 a1 = 2
let a2 = 1
let b2 = ++a2
console.log(b2,a2) // b2 = 2 a2 = 2

// Q
let v = 10 , x = 20
let z = v + x + x++ + ++v + ++x
console.log('v=',v)
console.log('x=',x)
console.log('z=',z)
