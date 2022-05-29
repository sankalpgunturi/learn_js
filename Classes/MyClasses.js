class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = []; // private variable
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  static login() {
    // will not be inherited
    return "You're logged in!!";
  }
}

class SubAdmin extends User {
  // constructor(name, email) {
  //   super(name, email);
  // }

  getAdminInfo() {
    return "I am sub-admin!";
  }
  login() {
    return "login for admin only";
  }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
// console.log(rock.courseList); // undefined
// console.log(rock.courseList); // SyntaxError: Private field '#courseList' must be declared in an enclosing class

const tom = new SubAdmin("tom", "tom@wb.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
