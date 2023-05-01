let x = [22, 11, 10, 33, 35, 22, 33, 10];
let o = x.filter((value, index) => {
  return x.indexOf(value) === index;
});
console.log(o);

//with function
let num = [1, 2, 3, 3, 3, 3, 3, 3, 8, 7, 9, 1, 2, 8, 9];

function duplicates(num) {
  // return num.filter((value,index)=> num.indexOf(value) === index);
  const map = new Map();
  for (const [index, item] of num.entries()) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }
  console.log([...map.keys()]);
}
console.log(duplicates(num));
