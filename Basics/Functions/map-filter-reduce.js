const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

const output = arr.map((x) => x.toString(2));

console.log(output);


// FILTER

const arr = [5, 1, 3, 2, 6];

// filtering out all the odd values

function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}

function greaterThanFour(x) {
    return x > 4;
}

const output = arr.filter((x) => x > 4);

console.log(output);

// Reduce - Example 1

const arr = [5, 1, 3, 2, 6];

// reduce does not reduce anything

// reduce the array to one logic ig

// sum or max

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

//acc is Accumulator
//curr is Current
//curr is arr[i]
//acc is sum
const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
// 0 is the initial value of acc

console.log(output);


//Reduce - Example 2

const arr = [5, 1, 3, 2, 6];

function findMax(arr) {
    let max = 0; // assuming our array is non-negtive
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output);

//Map - Example 1

// List of users coming from APIs
const users = [
    {firstName: "sankalp", lastName: "gunturi", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "barack", lastName: "obama", age: 50},
    {firstName: "shah-rukh", lastName: "khan", age: 53},
];

// list of full names

const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);

//Reduce - Example 3

// List of users coming from APIs
const users = [
    {firstName: "sankalp", lastName: "gunturi", age: 24},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "barack", lastName: "obama", age: 24},
    {firstName: "shah-rukh", lastName: "khan", age: 53},
];

// people with matching ages - my attempt (failed)

// const ageList = users.map(function (x) {
//     const ageOccurance = users.reduce(function (commonAgeCounter, i) {
//         if (i.age === x.age) ++commonAgeCounter;
//         return commonAgeCounter;
//     }, 0);
//     return ageOccurance;
// });

// console.log(ageList); // [2, 1, 2, 1]

// people with matching ages - saini
const output = users.reduce(function (acc, curr){
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);


//Reduce - Example 3

// List of users coming from APIs
const users = [
    {firstName: "sankalp", lastName: "gunturi", age: 24},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "barack", lastName: "obama", age: 24},
    {firstName: "shah-rukh", lastName: "khan", age: 53},
];

// first name of all the ppl whose age < 30-> my attempt failed

// const output = users.filter((x) => x.age < 30);

//chaining map and filter
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

//use reduce to solve this problem -> my attempt - success!
const output = users.reduce(function (acc, curr) {
    if (curr.age < 30) acc.push(curr.firstName);
    return acc;
}, []);

console.log(output);

