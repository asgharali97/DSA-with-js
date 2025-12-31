// Week 2  Strings
// **Revise:** Strings basics
// **Problem:** Valid Anagram
// brute force
let s = "aacc"
let t = "ccac"

function isAnagram(s, t) {
    let str = s.split("").sort().join("")
    let st = t.split("").sort().join("")
    if (str === st) {
        return true
    }
    return false
}
console.log(isAnagram(s, t))

// using hashmap

let map = new Map
function isAnagramHashMap(s, t) {
    if (s.length !== t.length) return false
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i]) || map.get(t[i]) === 0) {
            return false
        }
        map.set(t[i], map.get(t[i]) - 1)
    }
    return true
}
console.log(isAnagramHashMap(s, t))

// revsion D14
// brute force
function revsionBrute(s, t){
    let str = s.split("").sort().join("");
    let st = t.split("").sort().join("");

    if(str === st){
        return true
    }
    return false
}

console.log("revsoio",revsionBrute(s, t))
