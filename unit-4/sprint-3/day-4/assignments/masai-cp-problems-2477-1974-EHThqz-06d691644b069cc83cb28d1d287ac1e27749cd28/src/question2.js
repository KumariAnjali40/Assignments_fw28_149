// ## Problem 3 (function-to-function inheritance) :

function Mammal2(has_skeliton,has_fur,blood_type) {
    this.has_skeliton=has_skeliton;
    this.has_fur=has_fur,
    this.blood_type=blood_type
}
Mammal2.prototype.makeSound=function(){
    return `Mammal2 is making sound.`
}
Mammal2.prototype.canEat=function(name){
    return `${name} can eat.`
}

// var exampleMammal = new Mammal2(true, true, "warm-blooded");

// //propertites
// console.log(exampleMammal.has_skeliton); // true
// console.log(exampleMammal.has_fur); // true
// console.log(exampleMammal.blood_type); // warm-blooded

// //methods
// console.log(exampleMammal.makeSound()); // Mammal2 is making sound.
// console.log(exampleMammal.canEat("Bobcat")); // Bobcat can eat.

function createHuman(has_skeliton,has_fur,blood_type,name,height,skintone,gender,hair_type) {
    Mammal2.call(this,has_skeliton,has_fur,blood_type);
    this.name=name;
    this.height=height;
    this.skintone=skintone;
    this.gender=gender;
    this.hair_type=hair_type

}
Object.setPrototypeOf(createHuman.prototype, Mammal2.prototype);
Object.setPrototypeOf(createHuman, Mammal2);

createHuman.prototype.canSpeak = function () {
    return `${this.name} can speak.`;
}

createHuman.prototype.canDream = function () {
    return `${this.name} can dream.`;
}

// var exampleHuman = new createHuman(
//   true,
//   false,
//   "warm-blooded",
//   "Alice",
//   160,
//   "fair",
//   "female",
//   "straight"
// );

// // Propertites
// console.log(exampleHuman.has_skeliton); // true
// console.log(exampleHuman.has_fur); // false
// console.log(exampleHuman.blood_type); // warm-blooded

// // Methods
// console.log(exampleHuman.makeSound()); // Mammal2 is making sound.
// console.log(exampleHuman.canEat("Burger")); // Burger can eat.
// console.log(exampleHuman.canSpeak()); // Alice can speak.
// console.log(exampleHuman.canDream()); // Alice can dream.

// createEmployee factory function
function createEmployee(createEmployee,has_skeliton,has_fur,blood_type,name,height,skintone,gender,hair_type,salary,position,experience) {
    createHuman.call(this,name, height, skintone, gender, hair_type);
    this.salary = salary;
    this.position = position;
    this.experience = experience;
}
Object.setPrototypeOf(createEmployee.prototype, createHuman.prototype);
// Object.setPrototypeOf(createEmployee, createHuman);

createEmployee.prototype.handleTeam = function () {
    return `${this.name} can handle a team.`;
}

createEmployee.prototype.doMarketing = function () {
    return `${this.name} is good at marketing.`;
}


// // Create an employee object
// const employee = new createEmployee(
//   true,
//   true,
//   "A",
//   "John",
//   180,
//   "Fair",
//   "Male",
//   "Straight",
//   50000,
//   "Manager",
//   "5 years"
// );

// // propertites

// console.log(employee.has_skeliton); // true
// console.log(employee.has_fur); // true
// console.log(employee.blood_type); // A
// console.log(employee.name); // John
// console.log(employee.height); // 180
// console.log(employee.skintone); // Fair
// console.log(employee.gender); // Male
// console.log(employee.hair_type); // Straight
// console.log(employee.salary); // 50000
// console.log(employee.position); // Manager
// console.log(employee.experience); // 5 years

// // methods
// console.log(employee.makeSound()); // Mammal2 is making sound.
// console.log(employee.canEat("John")); // John can eat.
// console.log(employee.canSpeak()); // John can speak.
// console.log(employee.canDream()); // John can dream.
// console.log(employee.handleTeam()); // John can handle team.
// console.log(employee.doMarketing()); // John is good at marketing.


// don't chnage below export statement
export { Mammal2, createEmployee, createHuman };
