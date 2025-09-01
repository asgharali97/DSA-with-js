// Day 2 condionla statment 
//  Q 1 valid voter
// let age = Number(prompt('what is your age'))

// if(isNaN(age)){
//     console.log('invalid vlaue')
// }

// if(age < 18){
//     console.log('you can not vote')
// }else if( age >= 18){
//     console.log("you can vote")
// }

// Q 2 shop discont
// 5000 shopping disocunt is 0%
// up to 5000 shopping disocunt is 5%
// up to 10000 shopping disocunt is 10%
// up to 13000 shopping disocunt is 12%

// let ammount = Number(prompt('enter the final ammount'))
// let dis;
// if(ammount > 5000){
//     dis = 5
// }else if(ammount > 10000){
//     dis = 10
// }else if(ammount > 13000){
//      dis = 12
// }
//  console.log(ammount - Math.floor((dis*ammount)/100))

// Q 3
// electricity bill
// 0 to 100 units bill is 6
// 100 to 200 units bill is 8
// 200 to 300 units bill is 12
// 300 to 400 units bill is 15
// up to 400 units bill is 19

// let units = Number(prompt('Enter the total uints')) // 700
// let bill = 0;

// if(units > 400){
//     bill += (units-400) * 19  // 700 - 400 = 300 * 19 = 5700
//     units = 400
// }
// if(units > 300 && units <= 400){
//     bill += (units-300) * 15 // 400 - 300 = 100 * 15 = 1500
//     units = 300
// }
// if(units > 200 && units <= 300){
//     bill += (units-200) * 12 // 300 - 200 = 100 * 12 = 1200
//     units = 200
// }
// if(units > 100 && units <= 200){
//     bill += (units-100) * 8 //  200 - 100 = 100 * 8 = 800
//     units = 100
// }
// bill += units*6; // 100 * 6 = 600

// console.log(bill)

// Ternory operators 
let price = 40
let result = 10
console.log(price ? "the price is their" : "there is not price")
console.log(result ? "result" : "no result")
// nested ternory operators\
console.log(result >=12 ? "result" : result >= 15 ? "good" : "better")

// Swtich case

let day = 1

switch(day){
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('Tue')
        break;
    case 3:
        console.log('Wed')
        break;
    default:
        console.log('Sun')
    break;
}

// swtich case can't handle the floating value

let num = 2.5
let intger = Math.floor(num)
switch(num){
    case 1:
        console.log('1')
        break
    case 2.5:
        console.log('2')
        break;
    case 3:
        console.log('3')
        break;
    default:
        console.log('default')
        break
}