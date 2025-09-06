// Day 7 Time and Space Complexity

// Q
let n = 5;
for (let i = 0; i < n.length; i++) {
  console.log(i);
}

// complexity of this is O(n)

// Q
for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < n.length; i++) {
    console.log(j);
  }
}

// complexity of this is O(n^2)

// Q
for(let i = 0 ; i < n.length; i++){
    let result = []
    for(let j = 0; j < n.length; j++){
        result.push(i + j)
    }
    console.log(result)
}

// complexity of this is O(n^2)

// Q
let arr = [1, 2, 3, 4, 5]
let result = []
for(let i = 0 ; i < arr.length; i++){
    result.push(new Array(i).fill(0))
}

// complexity of this is O(n^2)

for(let i = n ; i >= 1; i / 2){
    console.log(i)
}

// complexity of this is O(log n)


// Q
let matrix = []
for(let i = 0 ; i < n; i++){
    matrix[i] = []
    for(let j = 0 ; i < n; i++){
    matrix[i][j] = i + j
}
}

// complexity of this is O(n^2)

// Q

for(let i = 0 ; i < n.length; i++){
    for(let j = 0; j < n.length; j++){
        for(let k = 0; k < n.length; k++){
            console.log(i + j + k)
        }
    }
}

// complexity of this is O(n^3)

// Q

for(let i = 0 ; i < n.length; i++){
    console.log(i)
}

for(let i = 0 ; i < n.length; i++){
    console.log(i)
}

for(let i = 0 ; i < n.length; i++){
    console.log(i)
}
// complexity of this is O(3n) --> O(n)

// Q
for(let i = 0 ; i < n.length; i++){
    for(let j = 0 ; i < n.length; j++){
    console.log(i)
}

}
for(let i = 0 ; i < n.length; i++){
    console.log(i)
}

// complexity of this is O(n^2) + O(n) --> O(n^2)