function sayHello(name) {
    console.log("Hello There, " + name);
    console.log(`Hello there, ${name}. How are you?`);
}

sayHello("sammy");
sayHello("sankalp"); // Calling a function
sayHello; // Referencing a function

function namaste() {
    return "Hello in India";
}

var greetings = namaste();
console.log(greetings);
console.log(namaste());