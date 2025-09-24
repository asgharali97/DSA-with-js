// Day 24 revsion of day 6,7
// d6 Strings
// Q Print Each char on new line
// let str = 'dsarevesion'
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// Q check if string is pillindrome or not
// let pandromeStr = 'madam'
// let rev = ''
// for(let i = pandromeStr.length-1; i >= 0; i--){
//     rev += pandromeStr[i]
// }
// if(rev === pandromeStr){
//     console.log('pandrome');
// }else{
//     console.log('not pandrome');
// }

// Q toggle each Char
// let str = "DsARevIsion"
// let toggle = ''

// for(let i = 0; i < str.length; i++){
//     if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
//         toggle = toggle + String.fromCharCode(str.charCodeAt(i) + 32)
//     }else if(str.charCodeAt(i) >= 90 && str.charCodeAt(i) <= 122){
//         toggle = toggle + String.fromCharCode(str.charCodeAt(i) - 32)
//     }
// }
// console.log(toggle);

// Q Frequency of Each other
// let str = 'javascript'
// let arr = new Array(128).fill(0);

// for(let i = 0; i < str.length; i++){
//     let indx = str.charCodeAt(i)
//     arr[indx] = arr[indx] + 1
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         console.log(String.fromCharCode(i) + ' appears at ' + arr[i] + ' times ');
//     }
// }

// +++ d7 Time and Space Complexity +++
// +++ 

let str = 'hello'