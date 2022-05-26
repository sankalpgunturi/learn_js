function x() {
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 3000);
    console.log("Namaste"); //Prints this first
}
x();



// Should print 1 to 5 with 1 second timeout. 
// This is a bad example.
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste"); //Prints this first
}
x();
/*
Output:
Namaste
6
6
6
6
6
*/

//Closure remembers to the reference of i and not the value of i.
//i gets incremented to 6 before even the first timer to expire.


//Solution
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste"); //Prints this first
}
x();

//Solution 2

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function(){
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Namaste"); //Prints this first
}
x();