// Day 11 of DSA 
// problem: Longest Repeating Character Replacement

let s = "AABABBA"
let k = 1

function CharReplace(s,k){
    let maxLen = 0

    for(let left = 0; left < s.length; left++){
        let freq = new Array(26).fill(0);

        for(let right = left; right < s.length; right++){
            let idx = s[right].charCodeAt(0) - 65
            freq[idx]++
            let windowLen = right - left + 1
            let maxFreq = Math.max(...freq)

            let needed = windowLen - maxFreq

            if(needed <= k){
                maxLen = Math.max(maxLen,windowLen)
            }
        }
    }
    return maxLen
}

// console.log(CharReplace(s,k))


function CharBrute(s,k){
   let maxLen = 0

   for(let i = 0 ; i < s.length; i++){
        let hash = new Array(26).fill(0)

        for(let j = i; j < s.length; j++){
            let idx = s[j].charCodeAt(0) - 65
            hash[idx]++

            let maxFreq = Math.max(...hash)
            let needed = (j - i + 1) - maxFreq

            if(needed <= k){
                maxLen = Math.max(maxLen, j - i + 1)
            }else break
        }
   }
   return maxLen
};
// console.log(CharBrute(s, k))

// Optimized approach
function optiCharReplace(s, k){
    let answer = 0
    let left = 0
    let maxFreq = 0
    let map = new Map()

    for(let right = 0; right < s.length; right++){
        map.set(s[right],(map.get(s[right]) || 0) + 1);

        maxFreq = Math.max(maxFreq, map.get(s[right]))

        let window = right - left + 1
        while(window - maxFreq > k){
            map.set(s[left], map.get(s[left]) - 1)
            left++
            window = right - left + 1
        }
        answer = Math.max(answer, window)
    }
    return answer
}


console.log(optiCharReplace(s,k))
