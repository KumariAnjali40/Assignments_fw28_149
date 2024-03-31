// Abstraction:

// Definition: Abstraction is the process of simplifying complex systems by modeling classes based on the essential properties and behaviors they share.


class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    calculateArea() {
      throw new Error("Abstract method not implemented");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    calculateArea() {
      return Math.pow(this.sideLength, 2);
    }
  }
  
  const circle = new Circle(5);
  console.log("Circle Area:", circle.calculateArea());
  
  const square = new Square(4);
  console.log("Square Area:", square.calculateArea());
  

  //Polymorphism:

//   Definition: Polymorphism allows objects to be treated as instances of their parent class, enabling code to work with objects of multiple types.


class Animal {
    speak() {
      throw new Error("Abstract method not implemented");
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  function makeAnimalSpeak(animal) {
    console.log(animal.speak());
  }
  
  makeAnimalSpeak(dog); // Outputs: Woof!
  makeAnimalSpeak(cat); // Outputs: Meow!

  
//   Encapsulation:

// Definition: Encapsulation involves bundling the data (attributes) and methods (functions) that operate on the data into a single unit, known as a class. It restricts direct access to some of an object's components and prevents external code from directly manipulating internal state.

class BankAccount {
    constructor(balance) {
      this._balance = balance; // Private variable
    }
  
    deposit(amount) {
      this._balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this._balance) {
        this._balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  
    getBalance() {
      return this._balance;
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
  account.withdraw(200);
  console.log("Current Balance:", account.getBalance());

  
//   Inheritance:

// Definition: Inheritance is a mechanism that allows a class to inherit properties and behaviors from another class, creating a hierarchy of classes.

class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      console.log("Vehicle started");
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, numDoors) {
      super(make, model);
      this.numDoors = numDoors;
    }
  
    drive() {
      console.log("Car is in motion");
    }
  }
  
  const myCar = new Car("Toyota", "Camry", 4);
  myCar.start(); // Inherited from Vehicle
  myCar.drive(); // Specific to Car
  