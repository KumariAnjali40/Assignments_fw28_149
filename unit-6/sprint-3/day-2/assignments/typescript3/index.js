// Function to retrieve the type
function getUserType(user) {
    if (user.type === 'user') {
        return 'User';
    }
    else {
        return 'Admin';
    }
}
// Example usage:
var user = {
    type: 'user',
    name: 'John Doe',
    age: 25,
    occupation: 'Developer',
};
var admin = {
    type: 'admin',
    name: 'Admin Name',
    age: 30,
    role: 'Administrator',
};
console.log(getUserType(user)); // Output: User
console.log(getUserType(admin)); // Output: Admin
