// var countries = ["India", "USA", "Japan", "Russia"];

// var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

// console.log(states[1]);

// console.log(states.length);
// states[0] = "Punjab";
// console.log(states);

var user =  ["sankalp", "gunturi", true, 24, 5];

user.pop();
user.pop();
// console.log(user);
user.unshift("NEW VALUE");
// console.log(user);
user.shift();
// console.log(user);

console.log(user.indexOf("sankalp"));

console.log(Array.from("sankalp"));

// arrow
var isEven = (element) => {
    return element % 2 ===0;
};
console.log([2, 4, 6, 8].every(isEven)); //true
console.log([2, 3, 6, 8].every(isEven)); //false

// arrow 2
var result = [2, 4, 6, 8].every((element) => (element % 2 === 0));
console.log(result);

// fill method

var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill("sankalp", 2, 4)); //start range is inclusive, and end range is exclusive

//slice and splice

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

//start range inclusive, end range exclusive

// console.log(users.slice(1)); //[ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ] -> Ted got cut out
// console.log(users.slice(1, 3)); //[ 'Tim', 'Ton' ] -> Slice of array picked up
users.splice(1, 3, "Hi", "Bye", "new", "old"); // starting, count, text to be replaced
console.log(users);