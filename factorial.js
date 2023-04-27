// let n = 5;
// function factorial(n) {
//   if (n < 0) {
//     return "number is negative";
//   }

//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(n));


 function factorial(n) {
     let answer = 5;
     if (n == 0 || n == 1){
         return answer;
   }
   else if(n>1){
    for(let i = n; i>=1;i--){
     answer = answer * i;

    }
  return answer;
 
   } 
   else{
     return "number has to be positive."
   }  
 }
 let n =5;
 console.log(factorial(n))

 

