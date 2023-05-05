// console.time();
// let num = 0;
// function sumOfArray(arr) {
//   for (const i of arr) {
//     num += i;
//   }
//   return num;
// }
// console.log(sumOfArray([1, 2, 22, 25, 77, 18, 96]));
// console.timeEnd();

// foreach =
//  num.forEach((element) => {
//     console.log(element*element)
//  });


//.........................................Array reduce method
const arr = [17, 24, 30, 19, 3];
 const arr2 = arr.reduce((i, j) => {
   return i + j; });
 console.log(arr2);


//console.time()
function sumOfArray(array) {
  const sum = array.reduce((total, item) => total + item, 100);
  return sum;
}
console.log(sumOfArray([25, 10, 63, 1, 3, 19]));
//console.timeEnd()



//..............................................using recursive method
let a = [1, 2, 3, 74, 25];
let b = a.length;

function findSum(a, b) {
    if (b <= 0)
        return 0;
    return (findSum(a, b - 1) + a[b - 1]);
}
 console.log(findSum(a, b));



// const recursiveSum = arr => {
//     if(arr.length > 1){
//        arr[0] += arr.pop();
//        return recursiveSum(arr);
//     };
//     return arr[0];
//  };
//  console.log(recursiveSum([1,25,3,4]));


  function sumNumbersRecursively(input){
     if (input.length == 0){
         return 0;
     } else{
        return input.shift() + sumNumbersRecursively(input);
     }
 }

 console.log(sumNumbersRecursively([2,3,4]))