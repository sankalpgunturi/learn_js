// Classic Closure Example
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}
x();


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);



function x(b) {
    var a = 7;
    b();
    function y() {
        console.log(a);
    }
    return y;
}
var z = x(
    function () {
        console.log(a);
    }
);
console.log(z);

// When returning a function, a bundle is returned which has the the lexical scope of the function and the function itself - this bundle is called closure.

function x() {
    const a = 7;
    return function () {
        console.log(a);
    }
}
var z = x();
console.log(z);
z();


// Gotcha 1
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100; // Modified value will be remembered
    return y;
}

var z = x();
console.log(z);
z();


// Gotcha 2

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        a = 100;
        return y;
    }
    var t = x();
    t();
}

z();
