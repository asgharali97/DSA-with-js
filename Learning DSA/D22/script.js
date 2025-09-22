// Day 22 revsion of day 1,2,3
// d1
// Q sum of two integers 
let a = 5 , b = 5
console.log(a + b);

// Q sum of message and integer
let c = 10
let d = 10
console.log('this sum of 3 + 2 =' , c + d);

// type corsion 
console.log(10  + "5");
console.log(10 - "5");
console.log(10 / "5");
console.log(10 * "5");
console.log(10 % "5");

// Q swap two variables via 3 methods
// method 1
let val1 = 30
let val2 = 40
let val3 = val1
val1 = val2
val2 = val3
console.log('val1 =', val1, "val2 =" , val2);
// method 2
let val4  = val1 + val2
console.log("val4 is =" , val4);
// method 3
let val5 = [val1, val2] = [val1 , val2]
console.log('val 5 = ' , val5);

// Q calculate the area and perimeter of rectengle
let ar = 22
let per = 10
console.log('area of the rectengle is ==> ', ar * per);
console.log('perimeter of the rectengle is ==> ', 2 * (ar + per));

// Q create otp
let otp = Math.floor((Math.random() * 9000) + 1000)
console.log('your otp is this ==> ', otp);

// Q area of tringale by heron's formula
let a1 = 7
let b1 = 5
let c1 = 7

let s = (a1+b1+c1)/2
let area = (Math.sqrt(s*(s-a1) * s * (s-b1) * s * (s-c1))).toFixed(2)
console.log(area);

// circumference of circle
let circle = 5
console.log(2*  Math.PI * circle);

// d2
// condional statment
// Q valid voter
let age = 21
if(age < 18){
    console.log('you are not valid voter');
}
else {
    console.log('you can vote ');
}

// give discont
// upto 5000 is 5%
// upto 10000 is 10%
// upto 15000 is 15%

let ammount = 12000
let dis = 0
if(ammount > 5000){
    dis = 5
}else if(ammount > 10000){
    dis = 10
}else{
    dis = 15
}
console.log(ammount - Math.floor((dis * ammount)) / 100);

// Q
// electricity bill
// 0 to 100 units bill is 6
// 100 to 200 units bill is 8
// 200 to 300 units bill is 12
// 300 to 400 units bill is 15
// up to 400 units bill is 19

let units = 500
let bill = 0
if(units  > 400){
    bill += (units - 400) * 19
    units = 400
}
if(units > 300 && units < 400){
    bill += (units - 300) * 15
    units = 300
}
if(units > 200 && units < 300){
    bill += (units - 200) * 12
    units = 200
}
if(units > 100 && units < 200){
    bill += (units - 100) * 8
    units = 100
}
bill += units * 6
console.log(bill);

// Ternory operators 
let value = true
console.log(value ? "yes values is" :" no value found");
// nested Ternory operators 
let price = 330
console.log(price < 200 ? 'price is now drop' : price >= 200 && price <= 300 ? "price is high" : "price is above 300" );

// loops
// Q print n numbers
// let n = 10
// for(let i = 0; i <= n; i++){
//     console.log(i);
// }

// // Q print n numbers reverse order
// console.log('reverse nums');
// for(let i = n; i >= 0; i--){
//     console.log(i);
// }

// Q some of n natural numbers
// let nums = 5
// let sum = 0
// for(let i = 1; i <= nums; i++){
//     sum += i
// }
// console.log('sum is ' , sum);

//  Q factorial of n numbers
// let num = 5
// let fact = 1
// for(let i = 1; i <= num; i++){
//     fact = fact * i
// }
// console.log("factorial of numbers is ==>" , fact);

// // Q factors of numbers
// for(let i = 1; i <= num; i++){
//     if(num % i === 0){
//         console.log("factors of numbers are ",i);
//     }
// }

// // Q while Loop sum of digit
// let digit = 1234
// // let sum1 = 0
// // while(digit > 0){
// //     sum1 += digit % 10
// //     digit = Math.floor(digit / 10)
// // }
// // console.log(sum1);

// // Q reverse of digit
// let rev = 0
// while(digit > 0){
//     let rem = digit % 10
//     rev = rev * 10 + rem
//     digit = Math.floor(digit / 10) 
// }
// console.log(rev);

// // Q strong Number
// let sNum = 145
// let sum2 = 0
// let copy = sNum

// while(sNum > 0){
//     let rem = sNum % 10
//     let fact = 1
//     for(let i = 1; i < rem; i++){
//         fact = fact * i
//     }
//     sum2 += fact
//     sNum = Math.floor(sNum/10)
// }
// if(copy === sum2){
//     console.log('your number is strong');
// }else{
//     console.log('not strong number');
// }

// d3
// Q right Angle Pattern
let n = 5
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write('* ')
    }
    console.log();
}

// Q right Angle Pattern with the numbers
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(j + " ")
    }
    console.log();
}

// Q Inverted Right Angle tringle Pattern
for(let i = 1; i <= n; i++){
    for(let j = i; j <= n; j++){
      process.stdout.write("* ")
    }
    console.log();
}

// Q mirror right Angle tringle Pattern
for(let i = 1; i <= n; i++){
     for(let j = 1; j <= n - i + 1; j++){
      process.stdout.write("  ")
    }
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log();
}








