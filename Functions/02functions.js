var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is subadmin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is user with access to create and delete tests`;
            break;
        case "user":
            return `${name} is user with access to consume content`;
            break; // NOT REQUIRED, SINCE RETURN WILL BREAK IT.
    
        default:
            break;
    }
}

console.log(getUserRole("sankalp", "testprep"));

var getRole = getUserRole("sammy", "user");
console.log(getRole);
