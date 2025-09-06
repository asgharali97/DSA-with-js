// Day 6  Strings

// Q Print Each char on new line

let s = "javascript";
for (let i = 0; i < s.length; i++) {
  // console.log(s[i])
}

// Q Print in reverse in Order

for (let i = s.length - 1; i > 0; i--) {
  // console.log(s[i])
}

// Q check if string is pillindrome or not

// normal approche
let str = "madam";
// let rev = '';
// for(let i = str.length - 1; i >= 0; i--){
//      rev = rev + str[i]
// }
// if(rev == str){
//      console.log('pillindrome');
// }else{
//      console.log('not pillindrome');
// }
// A better approche
// let i = 0, j = str.length-1
// let isPillindrome = true
// while(i < j){
//      if(str[i] !== str[j]){
//           isPillindrome = false
//           break
//      }
//      i++
//      j++
// }
// console.log(isPillindrome);

// Q toggle each Char
// Input = "abAcDefKi"
// Output = "ABaCdEFkI"

let val = "abAcDefKi";
let toggle = "";
for (let i = 0; i < val.length; i++) {
  if (val.charCodeAt(i) >= 65 && val.charCodeAt(i) <= 90) {
    toggle = toggle + String.fromCharCode(val.charCodeAt(i) + 32);
  } else if (val.charCodeAt(i) >= 97 && val.charCodeAt(i) <= 122) {
    toggle = toggle + String.fromCharCode(val.charCodeAt(i) - 32);
  }
}

console.log(toggle);

// Q Frequency of Each other
// input = hello
// Output =
// h --> 1
// e --> 1
// l --> 2
// o --> 1

let stri = "hello";
let arr = new Array(128).fill(0);

for (let i = 0; i < stri.length; i++) {
  let indx = stri.charCodeAt(i);
  arr[indx] = arr[indx] + 1;
}

for(let i = 0; i < arr.length; i++){
     if(arr[i] > 0){
          console.log(String.fromCharCode(i) + ' appears at ' + arr[i] + ' times')
     }
}
