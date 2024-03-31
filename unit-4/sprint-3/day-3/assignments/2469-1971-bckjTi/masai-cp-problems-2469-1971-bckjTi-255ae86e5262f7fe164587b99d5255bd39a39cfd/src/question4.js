// **Problem 6:****************************************************
//Convert the following factory function to an ES6 class

// function animal(noOfLegs, vegetarian) {
//   let obj = {};

//   obj.noOfLegs = noOfLegs;
//   obj.vegetarian = vegetarian;

//   obj.eat = function () {
//     return "eating...";
//   };

//   obj.greet = function () {
//     return `Hi, I have ${obj.noOfLegs} legs.`;
//   };
//   return obj;
// }

// // Example invocation
// let a1 = animal(4, true);
// a1.eat(); // eating...
// a1.greet(); // Hi, I have 4 legs.

class AnimalES6 {
    constructor(noOfLegs ,vegetarian){
        this.noOfLegs=noOfLegs;
        this.vegetarian=vegetarian;
    }
    eat(){
        return "eating...";
    }
    greet(){
       return  `Hi, I have ${this.noOfLegs} legs.`;
    }
}

// // Example invocation
// let animalES6 = new AnimalES6(4, true);
// console.log(animalES6.eat()); // eating...
// console.log(animalES6.greet()); // Hi, I have 4 legs.


//don't remove below export statement part
export { AnimalES6 };