// const arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.includes(10))

  const employees = [
   { id: 1, name: "jay", salary: 10000 },
    { id: 2, name: "vijay", salary: 20000 },
    { id: 3, name: "rohit", salary: 15000 },
    { id: 4, name: "keya", salary: 22000 },
    { id: 5, name: "pankaj", salary: 30000 },
    { id: 6, name: "Rahul", salary: 40000 },
  ]

//const number = [10,20,30,80,90,100,200,400];

function findNumbers(arr,key, val) {
  return arr.some((arrVal) => val === arrVal[key]);
  return !!arr.find((arrVal) => val === arrVal[key]);
  return arr.find((arrVal) => val === arrVal[key]) ?true : false;
}

console.log(findNumbers(employees,'name',"ajay")); 
 
