// for in loop -> for arrays
var states = ["AP", "TS", "CG", "TN", "KA"];

for(const n of states){
    console.log(n);
};

// for in loop -> for objects
const dictionary = {
    name: "Sankalp",
    age: "24",
    University: "CMU",
};

for (const n in dictionary) {
    console.log(`Key: ${n} and value: ${dictionary[n]}`);
};

// for each
var states = ["AP", "TS", "CG", "TN", "KA"];

states.forEach( (state) => console.log(state));