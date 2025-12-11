// Day 10 of DSA 
// Problem: Valid Palindrome

let str = "A man, a plan, a canal: Panama"

function isPalindrome(s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {

        while (left < right && !isAlphaNum(s[left])) {
            left++
        }

        while (left < right && !isAlphaNum(s[right])) {
            right--
        }

        if (s[right].toLowerCase() !== s[left].toLowerCase()) {
            return false
        }
        left++;
        right--;
    }
    return true
}

function isAlphaNum(c) {
    return /^[a-z0-9]$/i.test(c);
}

// brute force
let s = ''
function brutePlain() {
    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();
        if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
             s += ch
        }
    }

    let rev = s.split('').reverse().join("");
    console.log(rev)
    if(rev === s) return true
    return false
}

console.log(brutePlain())