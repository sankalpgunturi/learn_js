// Part 1

var user = {
    firstName : "Sankalp",
    lastName : "Gunturi",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user);

// Part 2

var user = {
    firstName : "Sankalp",
    lastName : "Gunturi",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());

console.table(user);