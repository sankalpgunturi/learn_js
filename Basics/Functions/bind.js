const sankalp = {
    firstName: "Sankalp",
    lastName: "Gunturi",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            Their Role is ${this.role}
            and studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName: "Dwayne",
    lastName: "Johnson",
    role: "Sub-Admin",
    courseCount: 4,
};

// sankalp.getInfo();

// sankalp.getInfo.bind(dj)();
var djInfo = sankalp.getInfo.bind(dj);
djInfo();

sankalp.getInfo.call(dj);