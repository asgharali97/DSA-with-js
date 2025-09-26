// Day 26 dsa revesion of day 10
// d10 Recursion

//  Q Print hello n times
// function greet(n){
//     if(n === 0) return
//     console.log('hello');
//     greet(n-1)
// }

// greet(5)

// Q Print natural numbers n time
// function nums(n){
//     if(n === 0) return
//     console.log(n)
//     nums(n-1)
// }

// nums(5)

// Q Print natural numbers n time with assending order
function nums(n){
    if(n === 0) return
    nums(n-1)
    console.log(n)
}

nums(5)

// Q sum of numbers
function sum(n){
    if(n === 1) return 1
    return n + sum(n - 1)
}

console.log(sum(5));

// Q factorial of number
function fact(n){
    if(n === 1) return 1
    return n * fact(n - 1)
}
console.log(fact(4));

// Q Fibconacci series
// let n = 10
// let first = 0
// let second = 1

// process.stdout.write(first + " " + second + " ");

// function fibo(n,first,second){
//     if(n === 0) return
//     let third = first + second
//     process.stdout.write(third + " " );
//     fibo(n - 1, second, third)

// }

// fibo(n-2,first,second)

// --> Fibconacci n sum

function fiboSum(n){
    if(n === 0 || n === 1) return n
    return fiboSum(n-1) + fiboSum(n-2)
}

console.log(fiboSum(8));