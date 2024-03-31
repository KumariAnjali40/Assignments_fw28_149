// ## Problem 1 (Object to Object inheritance) :

// You have been given 3 objects `grand_father`, `father` & `son`. create the prototype chain between them according to the family tree.

const grand_father = {
  height: "tall",
  skin_tone: "fair",
  hair_color: "black",
  hair_type: "curly",
  greet: function () {
    return "Hello, I am the grand-father!";
  },
};

const father = {
  skin_tone: "brown",
  hair_type: "straight",
  skill: "business",
  dimple: true,
  greet: function () {
    return "Hello, I am the father!";
  },
};

const son = {
  height: "short",
  hair_type: "straight",
  hair_color: "blond",
  skill: "coding",
  greet: function () {
    return "Hello, I am the son!";
  },
};

Object.setPrototypeOf(father, grand_father);
Object.setPrototypeOf(son, father);

// console.log(grand_father.height); //tall
// console.log(grand_father.skin_tone); //fair
// console.log(grand_father.hair_color); //black
// console.log(grand_father.hair_type); //curly

// console.log(grand_father.greet()); //Hello, I am the grand-father!

// console.log(father.height); //tall
// console.log(father.skin_tone); //brown
// console.log(father.hair_color); //black
// console.log(father.hair_type); //straight
// console.log(father.skill); //business
// console.log(father.dimple); //true

// console.log(father.greet()); //Hello, I am the father!

// console.log(son.height); //short
// console.log(son.skin_tone); //brown
// console.log(son.hair_color); //blond
// console.log(son.hair_type); //straight
// console.log(son.skill); //coding
// console.log(son.dimple); //true

// console.log(son.greet()); //Hello, I am the son!

// ## Problem 2 (function to object inheritance) :

function Mammal1(has_skeliton, has_fur, blood_type) {
  // return object
  const obj = {};
  obj.has_skeliton = has_skeliton;
  obj.has_fur = has_fur;
  obj.blood_type = blood_type;

  Object.setPrototypeOf(obj, Mammal1.prototype);
  return obj;
}

Mammal1.prototype.makeSound = function () {
  return "Mammal1 is making sound.";
};

Mammal1.prototype.canEat = function (name) {
  return `${name} can eat.`;
};

// const dog = Mammal1(true, true, "warm");
// console.log(dog); //{ has_skeliton: true, has_fur: true, blood_type: 'warm' }
// console.log(dog.makeSound()); //Mammal1 is making sound.
// console.log(dog.canEat("Dog")); // Dog can eat.

// don't remove below export statement
export { grand_father, father, son, Mammal1 };