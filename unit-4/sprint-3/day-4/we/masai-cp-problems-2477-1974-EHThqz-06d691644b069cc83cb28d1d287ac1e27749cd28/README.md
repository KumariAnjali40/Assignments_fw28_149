# JS-PT-WEB14-S2-A1

#### Object inheritance Prototype

## Submission Instructions [Please note]

## Installation

```
npm install --engine-strict
```

## Test

```
npm test
```

## Test (Watch mode)

```
npm test -- --watchAll
```

## Maximum marks - 26

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

most of your work would happen in the 
 - `src/question1.js` and 
 - `src/question2.js` files.

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

### Test cases

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ### Test cases for question1.js 

 --- Family Tree Prototype Chain ---
 ✅  Father objects should have required properties. - 1 mark
 ✅  Son object should have required properties.- 1 mark
 ✅  Property inheritance: check properties in son should not affect father or grandfather- 1 mark
 ✅  Check prototype chaining of Son to Father- 1 mark
 ✅  Check prototype chaining of Father to Grandfather- 1 mark

 ---Mammal1 Factory Function ---
 ✅  check Mammal1 has required  properties- 1 mark
 ✅  check Mammal1 has method makeSound- 1 mark
 ✅  check Mammal1 has method canEat- 1 mark

 ### Test cases for question2.js 

 --- Mammal2 Factory Function ---
 ✅  Mammal2 should have required properties.- 1 mark
 ✅  check Mammal2 makeSound method- 1 mark
 ✅  check Mammal2 canEat method- 1 mark

 ---createHuman Factory Function ---
 ✅  check createHuman properties- 1 mark
 ✅  check createHuman makeSound method- 1 mark
 ✅  check the createHuman canEat method- 1 mark
 ✅  check createHuman canSpeak method- 1 mark
 ✅  check the createHuman canDream method- 1 mark
 ✅  Check prototype chaining of createHuman to Mammal2- 1 mark

 ---createEmployee Factory Functions ---
 ✅  check createEmployee properties- 1 mark
 ✅  check createEmployee makeSound method- 1 mark
 ✅  check createEmployee canSpeak method- 1 mark
 ✅  check createEmployee canDream method- 1 mark
 ✅  check createEmployee handleTeam method- 1 mark
 ✅  check createEmployee doMarketing method- 1 mark
 ✅  check Prototype chain of createEmployee- 1 mark
 ✅  Check Prototype chaining of createEmployee to createHuman- 1 mark

```
_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>._

## question1.js  [8]

<h3 style="color:#215dc8">
Problem 1: Family Tree Prototype Chain [5]
</h3>

- You have been given 3 objects `grand_father`, `father` & `son`. 

- no need to create objects they are already provided in the template just create the `prototype chain` between them according to the *family tree*.

```
const grand_father = {
  height: "tall",
  skin_tone: "fair",
  hair_color: "black",
  hair_type: "curly",
  greet: function () {
    return "Hello, I am the grand-father!";
  }
};

const father = {
  skin_tone: "brown",
  hair_type: "straight",
  skill: "business",
  dimple: true
  greet: function() {
   return "Hello, I am the father!";
  }
};

const son = {
  height: "short",
  hair_type: "straight",
  hair_color: "blond",
  skill: "coding",
  greet: function() {
    return "Hello, I am the son!";
  }
};
```

 
  <h4 style="color:#ffa700">
`Example for grand_father object`
</h4>

```
// propertites
console.log(grand_father.height); //tall
console.log(grand_father.skin_tone); //fair
console.log(grand_father.hair_color); //black
console.log(grand_father.hair_type); //curly

//methods
console.log(grand_father.greet()); //Hello, I am the grand-father!
```

 
  <h4 style="color:#ffa700">
`Example for father object`
</h4>

```
// propertites
console.log(father.height); //tall
console.log(father.skin_tone); //brown
console.log(father.hair_color); //black
console.log(father.hair_type); //straight
console.log(father.skill); //business
console.log(father.dimple); //true

//methods
console.log(father.greet()); //Hello, I am the father!
```

 
  <h4 style="color:#ffa700">
`Example for son object`
</h4>

```
// propertites
console.log(son.height); //short
console.log(son.skin_tone); //brown
console.log(son.hair_color); //blond
console.log(son.hair_type); //straight
console.log(son.skill); //coding
console.log(son.dimple); //true

//methods
console.log(son.greet()); //Hello, I am the son!
```

**Hint** : `greet` method for objects `grand_father`, `father` and `son`  **`returns`** string as explained in above example.

<h3 style="color:#215dc8">
Problem 2: Mammal1 factory function [3]
</h3>

- Create a `Mammal1` *factory function* that will take `has_skeliton` (Boolean), `has_fur` (Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :
   1. `makeSound` that **`returns`** `Mammal1 is making sound.`
   2. `canEat` that will **`returns`**` ${name} can eat.`
       - where name is taken as `input` 
       

- add these methods to the prototype of the `Mammal1` function and create the chain so that every object created by this `Mammal1` factory function can access all these methods.

- **`return`** the object created from `Mammal1` *factory function*.

- **Note: Do not add these methods directly to the object**

<h4 style="color:#ffa700">
`Example for Mammal1 `
</h4>

```
const dog = Mammal1(true, true, "warm");
console.log(dog); //{ has_skeliton: true, has_fur: true, blood_type: 'warm' }
console.log(dog.makeSound()); //Mammal1 is making sound.
console.log(dog.canEat("Dog")); // Dog can eat.
```
- **Hint**:  canEat method take `name` as input and `return` string for better    understanding refer above example
## question2.js  [17]
<h3 style="color:#215dc8">
Problem 3 (function-to-function inheritance) 
</h3>

#### (Mammal2-createHuman-createEmployee)
<h4 style="color:#215dc8">
a. `Mammal2` factory function
</h4>

  - Create a `Mammal2` *factory function* that will take `has_skeliton` (Boolean), `has_fur` (Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :
    1. `makeSound` that **`returns`** `Mammal2 is making sound.`
    2. `canEat` that will **`returns`** `${name} can eat.`
        - where name is taken as `input` 

  - add these methods to the prototype of the `Mammal2` function and create the chain so that every object created by this `Mammal2` factory function can access all these methods.
 
  - **`return`** the object created from `Mammal2` *factory function*.
 
  <h4 style="color:#ffa700">
`Example for Mammal2`
</h4>

  ```
  var exampleMammal = new Mammal2(true, true, "warm-blooded");

  //propertites
  console.log(exampleMammal.has_skeliton); // true
  console.log(exampleMammal.has_fur); // true
  console.log(exampleMammal.blood_type); // warm-blooded

  //methods
  console.log(exampleMammal.makeSound()); // Mammal2 is making sound.
  console.log(exampleMammal.canEat("Bobcat")); // Bobcat can eat.
  ```
- **Hint**:  canEat method take `name` as input and `return` string for better understanding refer above example 
<h4 style="color:#215dc8">
b. factory function `createHuman`
</h4>

  - Create one factory function named `createHuman` that will take`has_skeliton`(Boolean), `has_fur`(Boolean), `blood_type`, `name`, `height`, `skintone`, `gender`, and `hair_type`, as parameters and create an object.

  This object should have methods -:

     1. `canSpeak` that will **`returns`** `${name} can speak.`
     2. `canDream` that **`returns`** `${name} can dream.`

  **Note:**  **All these methods should not be directly accessible instead add these methods to the prototype of the function.**

  - now create the prototype chain between `Mammal2` and `createHuman` so that `Human` can use `Mammal2’s` methods.


 <h4 style="color:#ffa700">
 `Example for createHuman`
</h4>

```
var exampleHuman = new createHuman(
  true,
  false,
  "warm-blooded",
  "Alice",
  160,
  "fair",
  "female",
  "straight"
);

// Propertites
console.log(exampleHuman.has_skeliton); // true
console.log(exampleHuman.has_fur); // false
console.log(exampleHuman.blood_type); // warm-blooded

// Methods
console.log(exampleHuman.makeSound()); // Mammal2 is making sound.
console.log(exampleHuman.canEat("Burger")); // Burger can eat.
console.log(exampleHuman.canSpeak()); // Alice can speak.
console.log(exampleHuman.canDream()); // Alice can dream.
  ```
 
<h4 style="color:#215dc8">
c. factory function `createEmployee`
</h4>

  - Create another factory function named `createEmployee` that will take`has_skeliton`(Boolean), `has_fur`(Boolean), `blood_type`, `name,` `height`, `skintone`, `gender`, `hair_type`, `salary`, `position`, and `experience`, as parameters and create an object.
  
  This object should have methods

  1. `handleTeam` that will **`returns`** `${name} can handle team.`
  2. `doMarketing` that will **`returns`** `${name} is good at marketing.`

  - **Note:**  **All these methods should not be directly accessible instead add these methods to the prototype of the function.**

  - now create the prototype chain between `createHuman` and `createEmployee` so that `employees` can use `human` methods.

 
 <h4 style="color:#ffa700">
`Example for createEmployee`
</h4>

```
const employee = new createEmployee(
  true,
  true,
  "A",
  "John",
  180,
  "Fair",
  "Male",
  "Straight",
  50000,
  "Manager",
  "5 years"
);

// propertites

console.log(employee.has_skeliton); // true
console.log(employee.has_fur); // true
console.log(employee.blood_type); // A
console.log(employee.name); // John
console.log(employee.height); // 180
console.log(employee.skintone); // Fair
console.log(employee.gender); // Male
console.log(employee.hair_type); // Straight
console.log(employee.salary); // 50000
console.log(employee.position); // Manager
console.log(employee.experience); // 5 years

// methods
console.log(employee.makeSound()); // Mammal2 is making sound.
console.log(employee.canEat("John")); // John can eat.
console.log(employee.canSpeak()); // John can speak.
console.log(employee.canDream()); // John can dream.
console.log(employee.handleTeam()); // John can handle team.
console.log(employee.doMarketing()); // John is good at marketing.
  ```
#### The Problem is tested on CP

<img src="https://i.imgur.com/BibCVJk.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
