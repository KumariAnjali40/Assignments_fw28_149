// ## Problem 3 (function-to-function inheritance) :

function Mammal2(has_skeliton, has_fur, blood_type) {
  const obj = {};

  obj.has_skeliton = has_skeliton;
  obj.has_fur = has_fur;
  obj.blood_type = blood_type;

  Object.setPrototypeOf(obj, Mammal2.prototype);
  return obj;
}

Mammal2.prototype.makeSound = function () {
  return "Mammal2 is making sound.";
};

Mammal2.prototype.canEat = function (name) {
  return `${name} can eat.`;
};

// var exampleMammal = new Mammal2(true, true, "warm-blooded");

// //propertites
// console.log(exampleMammal.has_skeliton); // true
// console.log(exampleMammal.has_fur); // true
// console.log(exampleMammal.blood_type); // warm-blooded

// //methods
// console.log(exampleMammal.makeSound()); // Mammal2 is making sound.
// console.log(exampleMammal.canEat("Bobcat")); // Bobcat can eat.

function createHuman(
  has_skeliton,
  has_fur,
  blood_type,
  name,
  height,
  skintone,
  gender,
  hair_type
) {
  const obj = {};
  obj.has_skeliton = has_skeliton;
  obj.has_fur = has_fur;
  obj.blood_type = blood_type;
  obj.name = name;
  obj.height = height;
  obj.skintone = skintone;
  obj.gender = gender;
  obj.hair_type = hair_type;

  Object.setPrototypeOf(obj, createHuman.prototype);
  return obj;
}

createHuman.prototype.canSpeak = function () {
  return `${this.name} can speak.`;
};
createHuman.prototype.canDream = function () {
  return `${this.name} can dream.`;
};

Object.setPrototypeOf(createHuman.prototype, Mammal2.prototype);

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
function createEmployee(
  has_skeliton,
  has_fur,
  blood_type,
  name,
  height,
  skintone,
  gender,
  hair_type,
  salary,
  position,
  experience
) {
  const obj = {};
  obj.has_skeliton = has_skeliton;
  obj.has_fur = has_fur;
  obj.blood_type = blood_type;
  obj.name = name;
  obj.height = height;
  obj.skintone = skintone;
  obj.gender = gender;
  obj.hair_type = hair_type;
  obj.salary = salary;
  obj.position = position;
  obj.experience = experience;

  Object.setPrototypeOf(obj, createEmployee.prototype);
  return obj;
}

createEmployee.prototype.handleTeam = function () {
  return `${this.name} can handle team.`;
};

createEmployee.prototype.doMarketing = function () {
  return `${this.name} is good at marketing.`;
};

Object.setPrototypeOf(createEmployee.prototype, createHuman.prototype);
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