var add = function (x) {
    return function (y) {
        return x + y;
    };
};

console.log(add(4)(5)); //curring