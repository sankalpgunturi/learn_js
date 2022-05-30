var temperature;

//TODO: Goto google and get the data

temperature = 39;

// var result = temperature < 20;
// console.log(result);

if (temperature < 20) {
    console.log("It's very cold outside");
} else {
    console.log("It's really hot outside")
}

if (temperature < 30) {
    console.log("It's moderate outside");
}

if (temperature < 30) {
    console.log("It's moderate outside");
}



// if (true) {
//     console.log("It's very cold outside");
// }

var user = "admin";
switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to create/delete tests");
        break;
    case "testprep":
        console.log("You get access to create/delete tests");
        break;
    case "user":
        console.log("You get access to create/delete content");
        break;


    default:
        console.log("Trail user");
        break;
}