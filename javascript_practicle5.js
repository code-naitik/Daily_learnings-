//1. How to know a datatype of a variable//
var a = 1;
var b = 2;
var c = "naitik";
var d = null;
console.log(typeof a, typeof b, typeof c, typeof d)// output will be number number string null//


//2. How to add/alter something in already described variable//
let o = {
  name: "naitik",
  "job code": 5600
}
console.log(o)//it will print name and jobe code//
o.salary = "1crore";
console.log(o)//now it will also show salary//
o.salary = "500crores";
console.log(o)//now it will alter salary to 500crores//

//3. Square a Number//
function square(num) {
  return num * num;
}

console.log(square(6)); // Output: 36

  
