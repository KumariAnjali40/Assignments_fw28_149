// **Problem 5:****************************************************
// Write a factory function that can be used to create animal objects in bulk quantity.

function animal(noOfLegs ,vegetarian) {
 let obj={};
 obj.noOfLegs=noOfLegs;
 obj.vegetarian=vegetarian;

 obj.eat=function(){
    return "eating..."
 }
 obj.greet=function(){
    return `Hi, I have ${noOfLegs} legs.`
 }
 return obj;
}

// // Example invocation
// let a1 = animal(4, true);
// console.log(a1.eat()); // eating...
// console.log(a1.greet()); // Hi, I have 4 legs.


//don't remove below export statement part
export { animal };