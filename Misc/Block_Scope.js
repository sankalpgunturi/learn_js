{
  //Compound Statement
  var a = 10;
  console.log(a);
}

if (true) console.log("Hi");

let a = 1000;
{
  let a = 10;
  const b = 100;
  var c = 30;

  console.log(a);
}
console.log(a);

// Illegal Shadowing
let a = 20;

{
  var a = 30;
}
