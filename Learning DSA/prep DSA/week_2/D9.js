// D9 of DSA 
//Q 387. First Unique Character in a String
// using hashmap
let s = "leetcode"
let map = new Map()
function UChar() {

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i
            break
        }
    }
    return -1

}

console.log(UChar())

// D14 revsion
let map1 = new Map()
function revsionUchar(str){
    for(let i = 0; i < str.length; i++){
        map1.set(str[i], (map1.get(str[i]) || 0) + 1)
    }

    for(let i = 0 ; i < str.length; i++){
        if(map1.get(str[i]) === 1){
            return i
        }
    }

    return -1
}

console.log(revsionUchar(s))