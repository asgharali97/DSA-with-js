// Day 12 of DSA 
// problem: Longest Common Prefix

let arr = ["flower", "flow", "flight"]

function brute(arr){
    let base = arr[0]
    let ans = ''

    if(arr.length === 1 && arr.some(a => a === "")) return "";
    if(arr.length === 1) return arr
    if(arr.length > 1 && arr.some(a => a === "")) return "";

    for(let i = 0; i < base.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(!arr[j][i] || arr[j][i] !== base[i]){
                return ans
            }
        }
        ans += base[i]
    }
    if(ans === "") return ""
    return ans 
}

console.log(brute(arr))

