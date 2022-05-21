const uid = "abc123"

// Cannot be changed
// This code will error out with TypeError: Assignment to constant variable.
// uid = "Abcd234"

var fullName = "Sankalp Gunturi"
var email = "sgunturi@xxx.com"
var password = "123456"
var confirmPassword = "123456"
var courseCount = 0;
var isLoggedInFromGoogle = false;

// Bad way to take input from user
// fullName = prompt("Enter your name");

console.log("Full Name is " + fullName);
console.log(fullName);

console.log(`
    With Unique ID: ${uid}
    User is: ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
`);