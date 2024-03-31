// Function to get full name
function getName(obj) {
    if (obj.lastname) {
        return "".concat(obj.firstname, " ").concat(obj.lastname);
    }
    else {
        return obj.firstname;
    }
}
// Function for PhoneBook
function PhoneBook(details) {
    // Your logic here
    // For example, you can push the details into an array
    phoneBookArray.push(details);
}
// Array to store PersonDetails objects
var phoneBookArray = [];
// Example usage
var person1 = {
    firstname: 'John',
    lastname: 'Doe',
    phones: [1234567890],
    addresses: [
        {
            houseNumber: 123,
            street: 'Main St',
            city: 'Cityville',
            state: 'CA',
            postalCode: '12345',
            country: 'USA',
        },
    ],
};
// Adding person1 to the phone book
PhoneBook(person1);
// You can add more PersonDetails objects similarly
