//creating an array.
var numbersArray = [1, 2, 3, 4, 5];
var stringsArray = ["apple", "banana", "orange"];
var myTuple = ["anjali", true];
//create an enum.
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 0] = "User";
    UserRole[UserRole["SuperUser"] = 1] = "SuperUser";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperAdmin"] = 3] = "SuperAdmin";
})(UserRole || (UserRole = {}));
//create fucntion
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y != 0) {
        return x / y;
    }
    else {
        throw new Error("Cannot divide by zero");
    }
}
function print(name) {
    console.log(name);
}
var userName = "anjali";
var userAge = 25;
var fetchingData = false;
print(userName);
var userRole = UserRole.Admin;
console.log("User role:", UserRole[userRole]);
