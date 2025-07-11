//1.Remove All Even Numbers
function removeEvens(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// Test locally
console.log(removeEvens([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(removeEvens([2, 4, 6, 8]));       // []

//2. Check if Two Strings are Anagrams
function isAnagram(s, t) {
  const sortStr = str => str.split('').sort().join('');
  return sortStr(s) === sortStr(t);
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


//3.Check if Array is Monotonic
function isMonotonic(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) decreasing = false;
    if (nums[i] < nums[i - 1]) increasing = false;
  }

  return increasing || decreasing;
}

// Test locally
console.log(isMonotonic([1, 2, 2, 3]));     // true
console.log(isMonotonic([6, 5, 4, 4]));     // true
console.log(isMonotonic([1, 3, 2]));        // false
console.log(isMonotonic([5, 5, 5, 5]));     // true
