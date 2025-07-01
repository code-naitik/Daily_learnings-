



// Write a function that takes an array of numbers and returns the largest number.


// 1
function findMax(arr) { let max = arr[0]; // Assume the first letter is the max.
for (let i = 1; i< arr .length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current number is larger.
    }
  }
  return max; 


}

// 2
const numbers = [3, 5, 7, 2, 8];
console.log(findMax(numbers)); // Output: 8





// write a function that counts how many even numbers are in a given array.
//1
function countEvenNumbers(arr) {
  let count = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Check if the number is even.
      count++; 
    }
  }
  return count; // Return the total count of even numbers.
}




//2
const number = [2,5,8,11,14];
console.log(countEvens(numbers)); // output:3





//write a function that takes an array and returns a new array with the elements in reverse order.
 //1
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >=0;
        i--) {
            reversed.push(arr[i]);
        }
        return reversed;
}


//2
const nums = [1,2,3,4,5];
console.log(reversedArray(nums));
//output: [5,4,3,2,1]






