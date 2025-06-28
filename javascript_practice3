//1//      //Capitalize First Letter of Each Word//
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"






//2//    //Check Prime Number//
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(17)); // Output: true
console.log(isPrime(18)); // Output: false






//3//    //Count Occurrences of Character in String//
function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("banana", "a")); // Output: 3
console.log(countChar("hello world", "o")); // Output: 2






//4//    // Fibonacci Series up to N Terms//
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]

