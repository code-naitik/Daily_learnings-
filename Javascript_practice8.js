//1. Sum of Numbers from 1 to n
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN(5)); // Output: 15  (1+2+3+4+5)


//2.Repeat a String N Times
function repeatString(str, times) {
  return str.repeat(times);
}

console.log(repeatString("abc", 3)); // Output: "abcabcabc"


//3.Check if Number is Odd
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(3)); // Output: true
console.log(isOdd(8)); // Output: false
