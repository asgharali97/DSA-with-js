// Day 4 
// Q First Negative Number in Every Window of Size K
let arr = [2, -3, 5, -1, 9, -6, 4]
let k = 3

/*
[2, -3, 5] → first negative = -3
[-3, 5, -1] → first negative = -3
[5, -1, 9] → first negative = -1
[-1, 9, -6] → first negative = -1
[9, -6, 4] → first negative = -6
Output:
[-3, -3, -1, -1, -6]
/*
*/
let result = []

for(let i = 0; i < arr.length - k + 1; i++){
     let found = false
     for(let j = i; j < i + k; j++){
        if(arr[j] < 0){
            result.push(arr[j])
            found = true
            break
        }
     }
     if(!found){
        result.push(0)
     }
}
// console.log(result)

// Optimzed approach using sliding window
let resul = []
let queue = []

for (let i = 0; i < k; i++) {
    if (arr[i] < 0) {
        queue.push(i)
    }
}

resul.push(queue.length ? arr[queue[0]] : 0)

for (let i = k; i < arr.length; i++) {
    if (queue.length && queue[0] < i - k + 1) {
        queue.shift()
    }

    if (arr[i] < 0) {
        queue.push(i)
    }
    resul.push(queue.length ? arr[queue[0]] : 0)
}

console.log(resul);