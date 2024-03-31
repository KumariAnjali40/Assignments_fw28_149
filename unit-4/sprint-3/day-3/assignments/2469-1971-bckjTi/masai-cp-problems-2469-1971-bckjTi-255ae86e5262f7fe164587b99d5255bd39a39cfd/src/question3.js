// **Problem 6:****************************************************
//Convert the following factory function to a constructor function

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

function AnimalCF(noOfLegs ,vegetarian) {

    this.noOfLegs=noOfLegs;
    this.vegetarian=vegetarian;

    this.eat=function(){
        return "eating..."
    }
    this.greet=function(){
        return `Hi, I have ${noOfLegs} legs.`
    }
 
}

// // Example invocation
// let animalCF = new AnimalCF(4, true);
// console.log(animalCF.eat()); // eating...
// console.log(animalCF.greet()); // Hi, I have 4 legs.

//don't remove below export statement part
export { AnimalCF };
