//let a = 80;
//let b = 70;
//console.log(a + " " + b);

//swapping two number
/*let x;
x = a;
a = b;
b = x;*/

//a = a + b; // value 40;
//b = a - b; // value 25;
//a = a - b; // value 15;

//console.log(a + " " + b);

function swapTwonumber(a, b) {
  if (a && b) {
    if (isGivenType(a) && isGivenType(b)) {
      a = a + b;
      b = a - b;
      a = a - b;
      return { a, b };
    } else {
      let x;
      x = a;
      a = b;
      b = x;
      return { a, b };
    }
  }
}

function isGivenType(value, type) {
  return typeof value === type;
}

console.log(swapTwonumber(undefined,null));
