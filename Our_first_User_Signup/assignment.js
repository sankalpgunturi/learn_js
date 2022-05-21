// Node JS does not work for this code.
// It throws a ReferenceError: prompt is not defined
// Run this from browser only
const uid = prompt("Enter your User ID: ");
const firstName = prompt("Please enter your First Name: ");
const lastName = prompt("Please enter your Last Name: ");
const email = prompt("Please enter your Email ID: ");
const password = prompt("Please enter password: ");
const country = prompt("Please enter which Country you belong to: ");
const state = prompt("Please enter which State you belong to: ");
var courseCount = 0;
var isLoggedInFromGoogle = false;

console.log(`
    UID: ${uid}
    First Name: ${firstName}
    Last Name: ${lastName}
    Email ID: ${email}
    Password: ${password}
    Country of Residence: ${country}
    State of Residence: ${state}
    No. of Courses: ${courseCount}
    Is the User logged in from Google: ${isLoggedInFromGoogle}
`)