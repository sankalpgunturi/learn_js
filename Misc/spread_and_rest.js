// var returnedValue = Math.max(2, 5, 7, 4, 5, 1, 9, 8);
// console.log(returnedValue);

// var myObject = {};

// Object.assign(myObject, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.table(myObject);
// console.log(myObject);

// function sumOne(a, b) {
//   return a + b;
// }

// var myA = [5, 4];
// // console.log(sumOne(myA)); //5,4undefined
// // console.log(sumOne(...myA)); //spread Operator

// function sumTwo(...args) {
//   // When you don't know how many args to expect - rest operator
//   console.log(args);
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(sumTwo(...myA));

function sumTwo(a, b, ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));
