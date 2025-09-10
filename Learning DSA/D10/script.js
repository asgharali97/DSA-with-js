// Day 10 Recursion

// Q Print hello n times

// function greet(n){
//     if(n == 0) return
//     console.log('hello');
//     greet(n - 1)
// }

// greet(5)

// Q Print natural numbers n time

// function greet(n){
//     if(n == 0) return
//     console.log(n);
//     greet(n - 1)
// }

// greet(6)

// Q Print natural numbers n time with assending order

// function greet(n){
//     if(n == 0) return
//     greet(n-1)
//     console.log(n);
// }

// greet(6)

// Q sum of numbers

// function sum(nums){
//     if(nums == 1) return 1
//     return nums + sum(nums - 1)
// }

// We call function in return when we the pervios state will come with it 


// console.log(sum(4))

// Q factorial of number

// function fact(n){
//     if(n == 1) return 1
//     return n * fact(n - 1)
// }

// console.log(fact(5))

// Q Fibconacci series
// --> Fibconacci sum
// let n = 10;
// let first = 0,
//   second = 1;

// process.stdout.write(first + " " + second + " ");

// for (let i = 0; i < n - 2; i++) {
//   let third = first + second;
//   first = second;
//   second = third;
//   process.stdout.write(third + " ");
// }

// function fibcon(nums, first, second) {
//   if (nums == 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   fibcon(nums - 1, second, third);
// }
// process.stdout.write(first + " " + second + " ");
// fibcon(n-2, first, second);

// --> Fibconacci n sum

function fibo(n){
    if(n==0 || n==1) return n
    return fibo(n-1) + fibo(n-2)
}

let n = 6 
console.log(fibo(n))