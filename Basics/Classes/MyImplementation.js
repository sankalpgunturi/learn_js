// import User from "./MyClasses"
const User = require("./MyClasses.js");

const sankalp = new User("sankalp", "sgunturi@protonmail.com");

console.log(sankalp.getInfo());
sankalp.enrollCourse("React Bootcamp");
sankalp.enrollCourse("Angular Bootcamp");

console.log(sankalp.getCourseList());

let courses = sankalp.getCourseList();

courses.forEach((course) => console.log(course));
