// const user = ["sankalp", 3, "admin"];

// // var role = user[2];
// // var name = user[0];

// // Destructuring string array
// var [name, courseCount, role] = user;

// console.log(role);

const MyUser = {
  name: "sankalp",
  courseCount: 5,
  role: "admin",
};

console.log(MyUser.courseCount);

// valid
// const {name, courseCount, role} = MyUser;
// console.log(courseCount); //5

// invalid
const { name, myCourseCount, role } = MyUser;
console.log(myCourseCount); //undefined
