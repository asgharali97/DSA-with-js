// Day 5 of DSA
// Q Longest Substring Without Repeating Characters
// brute force
let s = "abcabcbb"
let maxlen = 0

// for(let i = 0 ; i < s.length; i++){
//     let seen = new Set()
//     for(let j = i; j < s.length; j++){
//         if(seen.has(s[j])){
//             break
//         }
//         seen.add(s[j]);
//         maxlen = Math.max(maxlen, j - i  + 1)
//     }
//     console.log(seen)
//     return maxlen
// }

// optimze approach using sliding window
let map = new Map()
let left = 0
let max = 0

for(let right = 0; right < s.length; right++){
    let char = s[right]
    if(map.has(char) && map.get(char) >= left){
        left = map.get(char) + 1
    }
    map.set(char,right)
    maxlen = Math.max(maxlen, right - left + 1)
}
console.log(maxlen)
console.log(map)