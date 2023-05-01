// let num = [1, 2, 3, 4];
// num.forEach((array) => {
//   console.log(array + array);
// });

//Create a function which double your array elements
let array = [1, 2, 3, 4];
let b = array.map((value, index) => {
  console.log(value, index);
  return value * 2;
});
// const x = array.map((value) => value*2);
console.log(b);

// find even number
let x = [5, 8, 56, 28, 17, 20, 32, 38, 11, 13, 23];
let even = x.filter((a) => {
  return a % 2 == 0;
});
// const even = x.filter((a) => a % 2 === 0);
console.log(even);

//Array Join method
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(",").split(","));

//Get a first a element from array
function getFirstNElmentsFromGivenArray(arr, size = 0) {
  if (size >= 0) {
    if (!arr.length) {
      return [];
    } else {
      return arr.slice(0, size);
    }
  } else {
    console.log("Negative size not allowed");
  }
}
console.log(getNFirstElmentsFromGivenArray([1, 2, 4, 5], 2));

//Get a last element from array
function getLastNElmentsFromGivenArray(array, n) {
  if (array == null) return 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
console.log(getLastNElmentsFromGivenArray([3, 5, 6, 8], 2));
