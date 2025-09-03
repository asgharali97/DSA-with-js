// Day 3 Pattern Programming
const prompt = require("prompt-sync")();
// writing a base pattern
let n = Number(prompt("enter a number"));

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }
// Q right Angle Pattern

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }

// Q right Angle Pattern with the numbers

// for(let i =1; i<=n; i++){
//     for(let j= 1; j<=i; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }

// Q right Angle Pattern with the characters

// for(let i = 1; i <= n; i++){
//      let assci = 65
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String.fromCharCode(assci) + " ")
//         assci++
//     }
//     console.log()
// }

// Q Inverted Right Angle tringle Pattern
// i = 1 * * * * * j = 1 n = 5 --> j <= n - i + 1
// i = 2 * * * *
// i = 3 * * *
// i = 4 * *
// i = 5 *

// for(let i = 1; i <= n ; i++){
//     for(let j = 1; j <= n - i + 1; j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }
// second way
// for(let i = 1; i <= n ; i++){
//     for(let j = 1; j <= n - 1 + 1; j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }
// Q mirror right Angle tringle Pattern

// for(let i = 1; i <= n ; i++){
//     for(let j = 1; j <= n - i + 1; j++){
//         process.stdout.write('  ')
//     }
//     for(let k = 1; k <= i ; k++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }

// Q Print X Pattern
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     }else process.stdout.write("  ");
//   }
//   console.log();
// }

// Q Print V pattern
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n*2 -1; j++){
        if(i == j || i + j == n * 2){
            process.stdout.write("* ");
        }else process.stdout.write("  ");
    }
    
    console.log();
}