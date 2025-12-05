const revisionLog = [
  {
    question: "Brute Force Explain brute force two-sum, what loops dowhat we compare time complexity",
    yourAnswer: "in brute force we have the 2 loops 1 is outer loop and 2nd is inner loop outer loop itreate thourg all elems of arr and inner loop start from i + 1 to arr.length which compare the nums[i] outer loop + nums[j] inner loop === target if true return the [i,j]. and it's time complexity if we see which is O(n2) because 1 loop is going through all n elems and loop 2 is rececking them agian .",
    status: "correct",
    reason: "Your answer: Correct loops Correct comparison Correct indices Correct O(n²) Weak areas: Too wordy You drift while explaining Time complexity confidence is weak You aren’t used to expressing TC cleanly"
  },
  {
    question: "Explain the HashMap approach clearly:what key you store what value you store when you detect the answer exists time complexity",
    yourAnswer: "picking two sum for explaning . we store in key the elems of arr and in value we store the index . like this map.set(nums[i],i) . we detect like this if map.has(target - nums[i]) it detets the answer exits in map and we return it like this map.get(i, map.get(target - nums[i])). that we detect answer target - nums[i] we also do this in brute force like this com = target - nums[i] and in inner loop we check that indexOf j if it exits then return . and time complexity of hasmap is O(n) bcz we do it with just 1 loop not nested loop for avoiding nested loop we use the hasmap",
    status: "correct",
    reason: "HashMap Two Sum Loop through array For each nums[i], compute complement = target - nums[i] Check map: if map.has(complement), return [map.get(complement), i] Otherwise store current element: map.set(nums[i], i) Key: number Value: index Time: O(n) because each lookup and insert is O(1)"
  },
  {
    question: "Q3 — Give the two-pointer sorted approach in 20 seconds: Explain: why sorting is allowed conceptually how left/right move when you move left vs right time complexity",
    yourAnswer: "why sorting is allowed conceptually. bcz it's works only on the sorted array not on unsorted array . how we move pointers . we move left when the currentsum < target left++ and if currentsum > target right-- . we move left when we get current sum < target so we increase our left and we move the right we currentsum is > target we decrease the right . it's time complexity is also O(n) we are using only 1 while loop and not any nested loops under it .",
    status: "Incorrect",
    reason: "you understand the mechanics, but your explanation still has two problems: You didn’t explain the real reason sorting is allowed. You repeated yourself instead of giving a clean structure."
  },
  {
    question: "Q4 — Pattern Identification If the array is NOT sorted → which solution do you use and why? If the array IS sorted → which solution is best and why? Why do interviewers prefer the hashmap approach?",
    yourAnswer: "1. if arr is not sorted I will use the hasmpa bcz it's optimze approach and it don't need sorted array . it's time complexity is O(n). 2. if the array is sorted which solution is best and why? well little bit tricky . if we have sorted array we should pick the two pointer it's good bcz it's time complexity is O(log n) better than hashmap if you have sorted array . 3. bcz it's don't need sorted array and it's time complexity .",
    status: "mostly correct in intention",
    reason: "Mistake #1: “two pointers is O(log n)” This is wrong.Two pointers is O(n), not O(log n). You are confusing: binary search → O(log n) two pointers → O(n) Never repeat that mistake. Interviewers will destroy you for it.  Mistake #2: You’re not stating the real constraint Two pointers is only valid when: → You DON’T need original indices. The actual Two Sum problem ALWAYS requires original indices → so two-pointer is useless there unless you track original positions while sorting (messy, unnecessary for interviews).  Your answer for “why hashmap is preferred” is shallow You said “because it’s time complexity” — that’s incomplete."
  },
];

const day3Revision = [
  {
    question: "Q1: Why does brute force take O(n²)?",
    yourAnswer: "Brute force takes O(n²) because it uses nested loops. The outer loop fixes the start index, the inner loop sums the subarray from that index. Each pair of indices is checked once, giving O(n²).",
    status: "correct",
    reason: "Mechanically correct; captures why both loops are needed."
  },
  {
    question: "Q2: What exactly does the map store and why?",
    yourAnswer: "The map stores cumulative sums as keys and their frequencies as values. Key = current prefix sum. Value = number of times this sum occurred. Frequency is needed to count how many subarrays sum to k. map.set(sum, (map.get(sum) || 0) + 1) updates this count.",
    status: "partially correct",
    reason: "You said 'index' — it’s not index, it’s frequency of prefix sum. Corrected for clarity."
  },
  {
    question: "Q3: Why does prefix sum + hashmap become O(n)?",
    yourAnswer: "Prefix sum + hashmap is O(n) because we iterate the array once, storing prefix sums in the map. The map allows O(1) lookup to check if a subarray sum = k exists. This removes the need for nested loops.",
    status: "correct",
    reason: "Explains the structural property that eliminates the inner loop."
  }
];
// Q longest subarray sum <= k
// using sliding window
let arr = [2, 1, 3, 2, 4]
let k = 6;
let left = 0
let maxlength = 0
let sum = 0

for (let right = 0; right < arr.length; right++) {
  sum += arr[right]
  while (sum > k) {
    sum -= arr[left]
    left++
  }
  maxlength = Math.max(maxlength, right - left + 1)
}

console.log(maxlength)
// using prefix sum
function prefixSum(arr, k) {
  let map = new Map()
  let sum = 0
  let max = 0

  map.set(0, -1)

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    let need = sum - k
    if (map.has(need)) {
      max = Math.max(max, i - map.get(need))
    }

    if (!map.has(sum)) {
      map.set(sum, i)
    }
  }
  return max
}

console.log(prefixSum(arr, k))