var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);;
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your first name is ${this.firstName}`);
};

var user1 = new User("sankalp", 2);
user1.getCourseCount();

if (user1.hasOwnProperty("firstName")) {
    user1.getFirstName();
}

// console.log(user1);

var user2 = new User("sam", 3);
user2.getCourseCount();
user2.getFirstName();
// console.log(user2);