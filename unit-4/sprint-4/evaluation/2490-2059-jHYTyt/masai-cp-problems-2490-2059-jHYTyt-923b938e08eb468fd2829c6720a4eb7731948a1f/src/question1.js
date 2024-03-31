// Problem 1. `CreateApp1` factory function
// you are not allowed to use the this keyword in the CreateApp1 function.
function CreateApp1(appName,rating,developer,category,platform,price) {
 let obj={};
 obj.appName=appName;
 obj.rating=rating;
 obj.developer=developer;
 obj.category=category;
 obj.platform=platform;
 obj.price=price;

Object.setPrototypeOf(obj,CreateApp1.prototype);

return obj;

}
CreateApp1.prototype.getAppInfo=function(){
  `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
}
CreateApp1.prototype.getPrice=function(){
  return this.price;
}
CreateApp1.prototype.increasePrice=function(value){
  this.price+=value;
  return this.price;
}
CreateApp1.prototype.decreasePrice=function(value){
  this.price-=value;
  return this.price;
}
CreateApp1.prototype.isPopular=function(){
  return this.rating>=3;
}

// // Example invocation
// let app1 = CreateApp1("MyApp", 3.5, "MyCompany", "Utility", "iOS", 30000);

// console.log(app1.appName) // MyApp
// console.log(app1.rating) // 3.5
// console.log(app1.developer) // MyCompany
// console.log(app1.category) // Utility
// console.log(app1.platform) // iOS
// console.log(app1.price) // 4.99

// console.log(app1.getAppInfo()); // MyApp (Rating: 1.0) by MyCompany
// console.log(app1.getPrice()); //30000
// console.log(app1.increasePrice(2000)); //32000
// console.log(app1.decreasePrice(3000)); //29000
// console.log(app1.getPrice()); //29000
// console.log(app1.isPopular()); // true

// Problem 2. `CreateApp2` constructor function
function CreateApp2(appName,rating,developer,category,platform,price) {
this.appName=appName;
this.rating=rating;
this.developer=developer;
this.category=category;
this.platform=platform;
this.price=price;
}
CreateApp2.prototype.getAppInfo=function(){
  return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
}
CreateApp2.prototype.getPrice=function(){
  return this.price;
},
CreateApp2.prototype.increasePrice=function(value){
this.price+=value;
 return this.price;
},
CreateApp2.prototype.decreasePrice=function(value){
 this.price-=value;
  return this.price;
},
CreateApp2.prototype.isPopular=function(){
  return this.rating>=3;
}

// // Example invocation
// let app2 = new CreateApp2(
//   "MyApp",
//   2,
//   "creativeWorks",
//   "Entertainment",
//   "Android",
//   14000
// );

// console.log(app2.appName); // MyApp
// console.log(app2.rating); // 2
// console.log(app2.developer); // creativeWorks
// console.log(app2.category); // Entertainment
// console.log(app2.platform); // Android
// console.log(app2.price); // 14000

// console.log(app2.getAppInfo()); // MyApp (Rating: 2) by creativeWorks
// console.log(app2.getPrice()); //14000
// console.log(app2.increasePrice(2000)); //16000
// console.log(app2.decreasePrice(3000)); //13000
// console.log(app2.getPrice()); //13000
// console.log(app2.isPopular()); // false

class CreateApp3 {
     constructor(appName,rating,developer,category,platform,price){
      this.appName=appName;
      this.rating=rating;
      this.developer=developer;
      this.category=category;
      this.platform=platform;
      this.price=price;
     }
     getAppInfo(){
      return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
    };
    getPrice(){
      return this.price;
    };
    increasePrice(value){
    this.price+=value;
     return this.price;
    };
    decreasePrice(value){
     this.price-=value;
      return this.price;
    };
    isPopular(){
      return this.rating>=3;
    }

}


// // Example invocation
// let app3 = new CreateApp3(
//   "MyApp",
//   3,
//   "YetcreativeWorks",
//   "Games",
//   "iOS",
//   70000
// );
// console.log(app3.appName); // MyApp
// console.log(app3.rating); // 3
// console.log(app3.developer); // YetcreativeWorks
// console.log(app3.category); // Games
// console.log(app3.platform); // iOS
// console.log(app3.price); // 70000

// console.log(app3.getAppInfo()); // MyApp (Rating: 3) by YetcreativeWorks
// console.log(app3.getPrice()); //70000
// console.log(app3.increasePrice(3000)); //73000
// console.log(app3.decreasePrice(3000)); //70000
// console.log(app3.getPrice()); //70000
// console.log(app3.isPopular()); // false


//don't remove below export statement part
export {
  CreateApp1,
  CreateApp2,
  CreateApp3
};