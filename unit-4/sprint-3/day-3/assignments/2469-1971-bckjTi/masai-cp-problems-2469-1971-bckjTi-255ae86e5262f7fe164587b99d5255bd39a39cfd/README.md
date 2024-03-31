# JS-PT-WEB14-S1-A3

#### object creation

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

## Maximum marks - 8

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

most of your work would happen in the 
 - `src/question1.js`, 
 - `src/question2.js`,
 - `src/question3.js` and 
 - `src/question4.js` files.

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

```
✅ submit the problem [1 mark]

### Test cases for the question1.js 
--------------
✅ factory function iPhone1 should create iPhone objects in bulk quantity [1 mark]
✅ factory function iPhone2 should create iPhone objects in bulk quantity [1 mark]
✅ Constructor Function iPhone3 should create iPhone objects in bulk quantity [1 mark]
✅ Using ES6 classes Iphone4 should create iPhone objects in bulk quantity [1 mark]

### Test cases for the question2.js 
--------------
✅ factory function that can be used to create animal objects in bulk quantity [1 mark]

### Test cases for the question3.js 
--------------
✅ Convert the `animal` factory function to a constructor function `AnimalCF` [1 mark]

### Test cases for the question4.js 
--------------
✅ Convert the `animal` factory function to an ES6 class `AnimalES6` [1 mark]


```
_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>._

## question1.js  [4]


<h3 style="color:#215dc8">
Problem 1: factory function iPhone1 [1]
</h3>

- write a factory function `iPhone1` to create iPhone objects in bulk quantity

- define a `iPhone1` function that takes **input** as 
    - ASIN
    - color
    - display 
    - camera 

- the object it creates has the following
  - **`properties`**: ASIN, color, display, camera
  - **`methods`**:
     - dial - `return` "tring.. tring..."
     - sendMessage - `return` "Sending message..."
     - cameraClick - `return` "Camera clicked"

 - `iPhone1` return `object`

```
let i1 = iPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);
---- properties
console.log(i1.ASIN); // 1
console.log(i1.color); // "B09X67JBQV"
console.log(i1.display); // 7.8
console.log(i1.camera); // "IOS"

---- methods
console.log(i1.dial()); // "tring.. tring..."
console.log(i1.sendMessage()); // "Sending message..."
console.log(i1.cameraClick()); // "Camera clicked"
```

<h3 style="color:#215dc8">
Problem 2: factory function iPhone2 [1]
</h3>

- write a factory function `iPhone2` to create iPhone objects in bulk quantity

- define a `iPhone2` function that takes **input** as 
    - ASIN
    - color
    - display 
    - camera 
    - `bluetooth`

- the object it creates has the following
  - **`properties`**: ASIN, color, display, camera, bluetooth
  - **`methods`**:
     - dial - `return` "tring.. tring..."
     - sendMessage - `return` "Sending message..."
     - cameraClick - `return` "Camera clicked"
     - connectBluetooth - `return` "Bluetooth connected successfully..."

 - `iPhone2` return `object`

```
let i2 = iPhone2(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP",
  "5.1"
);
---- properties
console.log(i2.ASIN); // 1
console.log(i2.color); // "B09X67JBQV"
console.log(i2.display); // 7.8
console.log(i2.camera); // "IOS"
console.log(i2.bluetooth); // "128GB"

---- methods
console.log(i2.dial()); // "tring.. tring..."
console.log(i2.sendMessage()); // "Sending message..."
console.log(i2.cameraClick()); // "Camera clicked"
console.log(i2.connectBluetooth()); //"Bluetooth connected successfully..."
```
Hint for Problem 3 and Problem 4: 

<span style="color: green">

- now use the constructor function and ES6 class to write the same code in Problem 3 and Problem 4 respectively

- use .call()/.apply() to avoid repetition.

</span>

<h3 style="color:#215dc8">
Problem 3: Using Constructor Functions [1]
</h3>

- write a constructor function `iPhone3` to create iPhone objects in bulk quantity

- define a `iPhone3` function that takes **input** as 
    - ASIN
    - color
    - display 
    - camera 
    - `bluetooth`

- the object it creates has the following
  - **`properties`**: ASIN, color, display, camera, bluetooth
  - **`methods`**:
     - dial - `return` "tring.. tring..."
     - sendMessage - `return` "Sending message..."
     - cameraClick - `return` "Camera clicked"
     - connectBluetooth - `return` "Bluetooth connected successfully..."

 - `iPhone3` return `object`

***`refer below given example carefully to use .call() method is mandatory`***

```
let i3 = {};
iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
---- properties
console.log(i3.ASIN); // 1
console.log(i3.color); // B09X67JBQV
console.log(i3.display); // 7.8
console.log(i3.camera); // IOS
console.log(i3.bluetooth); // 128mb

---- methods
console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendMessage()); // "Sending message..."
console.log(i3.cameraClick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."
```

<h3 style="color:#215dc8">
Problem 4: Using ES6 classes [1]
</h3>

- write a class `Iphone4` to create iPhone objects in bulk quantity

- define a `IPhone4` constructor function that takes **input** as 
    - ASIN
    - color
    - display 
    - camera 
    - `bluetooth`

- the object it creates has the following
  - **`properties`**: ASIN, color, display, camera, bluetooth
  - **`methods`**:
     - dial - `return` "tring.. tring..."
     - sendMessage - `return` "Sending message..."
     - cameraClick - `return` "Camera clicked"
     - connectBluetooth - `return` "Bluetooth connected successfully..."

```
let i4 = new Iphone4(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP",
  "5.1"
);
---- properties
console.log(i4.ASIN); // 1
console.log(i4.color); // B09X67JBQV
console.log(i4.display); // 7.8
console.log(i4.camera); // IOS
console.log(i4.bluetooth); // 128mb

---- methods
console.log(i4.dial()); // "tring.. tring..."
console.log(i4.sendMessage()); // "Sending message..."
console.log(i4.cameraClick()); // "Camera clicked"
console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
```
## question2.js  [1]

<h3 style="color:#215dc8">
Problem 5: factory function that can be used to create animal objects [1]
</h3>

- Write a factory function that can be used to create animal objects in bulk quantity.

`animal`

    ├── noOfLegs <number>
    ├── vegetarian <boolean>
    ├── eat() <function that returns `eating...`>
    └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

- define an `animal` factory function that takes input as 
    - noOfLegs (number)
    - vegetarian (boolean)

- Every animal object it creates has the following
  - **`properties`**: noOfLegs, vegetarian
  - **`methods`**:
     - eat - `return` "eating..."
     - greet - `return` "Hi, I have ${noOfLegs} legs."

```
let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.
```

## question3.js  [1]

<h3 style="color:#215dc8">
Problem 6: factory function to a constructor function [1]
</h3>

- Write a `constructor function` that can be used to create animal objects in bulk quantity.

`AnimalCF`

    ├── noOfLegs <number>
    ├── vegetarian <boolean>
    ├── eat() <function that returns `eating...`>
    └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

- define an `AnimalCF` constructor function  that takes input as 
    - noOfLegs (number)
    - vegetarian (boolean)

- Every animal object it creates has the following
  - **`properties`**: noOfLegs, vegetarian
  - **`methods`**:
     - eat - `return` "eating..."
     - greet - `return` "Hi, I have ${noOfLegs} legs."

```
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.
```
## question4.js  [1]

<h3 style="color:#215dc8">
Problem 7: factory function to an ES6 class [1]
</h3>

- create a class `AnimalES6` that can be used to create animal objects in bulk quantity.

 `AnimalES6`

    ├── noOfLegs <number>
    ├── vegetarian <boolean>
    ├── eat() <function that returns `eating...`>
    └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

- define an `AnimalES6` factory function that takes input as 
    - noOfLegs (number)
    - vegetarian (boolean)

- Every animal object it creates has the following
  - **`properties`**: noOfLegs, vegetarian
  - **`methods`**:
     - eat - `return` "eating..."
     - greet - `return` "Hi, I have ${noOfLegs} legs."

```
let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
```

#### The Problem is tested on CP

<img src="https://i.imgur.com/16jqpCS.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
