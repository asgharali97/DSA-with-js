// Day 26 dsa revesion of day 11 and 12
// Day 11 Smart Math Problems

// Q HCF/GCF
// --> brute force

// function hcf(a, b){
//     if(a === b) return a
//     if(a > b) return hcf(a - b, b)
//     else return a, b - a
// }

// console.log(hcf(32,36));


// better way
// function hcf(a, b) {
//     if (b == 0) return a
//     return hcf(b, a % b);
// }

// console.log(hcf(32, 26));

// Q Factors of Numbers Optimze way
// let n = 100
// for (let i = 0; i < Math.floor(Math.sqrt(n)); i++) {
//     if(n % i === 0){
//         process.stdout.write(i + " ")
//     }
// }

// for(let i = Math.floor(Math.sqrt(n)); i >= 1; i--){
//     if(n % i === 0){
//         if(n / i !=  i){
//             process.stdout.write(i + " ")
//         }
//     }
// }


// Q Count of Prime Numbers (Sieve of eratosthenes)

// let n = 30
// let arr = new Array(n + 1).fill(true);

// for(let i = 2; i < Math.floor(Math.sqrt(n)); i++){
//     if(arr[i]){
//         for(let j = i  * i; j <= n; j+=i){
//             arr[j] = false
//             console.log(j);
//         }
//     }
// }

// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i]) process.stdout.write(i + " ")
// }


// Q, 50 Pow(x,n) leet code question

function Pow(x, n) {
    if (n === 0) return 1.0
    let ans = temp(x, n)
    return n < 0 ? 1 / ans : ans
}

function temp(x, n) {
    if (n === 0) return 1
    let ans = temp(x, parseInt(n / 2))
    if (n % 2 === 0) return ans * ans
    else return ans * ans * x
}

console.log(Pow(2.00000, -2));

// +++++ Day 12 Binary Search Algorithm ++++++
let arr = [1, 3, 7, 9, 14, 16, 22, 28, 32]

function BinarSearch(fisrt,last,arr,target){
    while(fisrt <= last){
        let mid = Math.floor((fisrt + last) / 2)
        if(arr[mid] === target) return mid
        else if(arr[mid] > target) last = last - mid
        else fisrt = mid + 1
    }
    return -1
}

console.log(BinarSearch(0,arr.length-1,arr,22));