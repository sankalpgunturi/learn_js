var User = {
    name: "",
    getUserName: function () {
        console.log(`Username is ${this.name}`);
    },
};

var user1 = Object.create(User);

console.log(user1);
user1.name = "Sankalp Gunturi";
user1.getUserName();

var user2 = Object.create(User, {
    name: {value : "sammy"},
    courseCount : {value: 3},
});

user2.getUserName();