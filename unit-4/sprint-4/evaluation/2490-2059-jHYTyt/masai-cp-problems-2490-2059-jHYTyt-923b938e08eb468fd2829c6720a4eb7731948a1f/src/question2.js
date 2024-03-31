// Problem 4
// Vehicle
// ├── #manufacturer
// ├── static getManufacturer(vehicle)
// ├── describe()
// └── calculateAcceleration(initialVelocity, finalVelocity, time)

// 1. Vehicle Class
class Vehicle {
  // use constructor to take input
  #manufacturer;
    constructor(manufacturer){
      this.#manufacturer=manufacturer;
    }
  // Getter for manufacturer
 get manufacturer() {
    return this.#manufacturer;
  }

  // Setter for manufacturer
  set manufacturer(value) {
    return this.#manufacturer=value;
  }

  static getManufacturer(vehicle) {
   return vehicle.#manufacturer
  }

  // method to describe Vehical here
  describe() {
    return `A generic vehicle manufactured by ${this.manufacturer}.`
  }

  // method to calculate acceleration here
  calculateAcceleration(initialVelocity, finalVelocity, time) {
    return (finalVelocity - initialVelocity) / time;
  }
}

// // Example invocation of Vehicle class
// const vehicle1 = new Vehicle("Generic Motors");
// console.log(vehicle1.manufacturer); // Generic Motors
// console.log(vehicle1.describe()); // A generic vehicle manufactured by Generic Motors.
// const initialVelocity = 20;
// const finalVelocity = 60;
// const time = 5;
// console.log(
//   vehicle1.calculateAcceleration(initialVelocity, finalVelocity, time)
// ); // 8

//---------------------------------------------------------
// 2. Car Class

// Car (extends Vehicle)
// ├── #model
// ├── #fuelEfficiency
// └── calculateDistance(fuelAmount)
class Car extends Vehicle {
  // use constructor to take input
  #model;
  #fuelEfficiency;
  
  constructor(manufacturer,model,fuelEfficiency){
    super(manufacturer);
    this.#model=model;
    this.#fuelEfficiency=fuelEfficiency;
  }

  // getter and setter method for model
  get model() {
    return this.#model;
  }

  set model(value) {
    this.#model=value;
  }

  // getter and setter method for fuelEfficiency
  get fuelEfficiency() {
    return this.#fuelEfficiency;
  }

  set fuelEfficiency(value) {
    this.#fuelEfficiency=value;
  }

  // method to calculate distance
  calculateDistance(fuelAmount) {
    return fuelAmount*this.fuelEfficiency;
  }
}

// // Example invocation of Car class
// const car1 = new Car("Toyota", "Camry", 25);

// console.log(car1.manufacturer); // Toyota
// console.log(car1.model); // Camry
// console.log(car1.fuelEfficiency); // 25

// console.log(car1.describe()); // A generic vehicle manufactured by Toyota.

// const fuelAmount = 10;
// console.log(car1.calculateDistance(fuelAmount)); // 250

//---------------------------------------------------------
// 3. Electric Class

// Electric (extends Car)
// ├── #chargeTime
// ├── #energyConsumption
// ├── charge()
// └──  calculateDistanceByEnergy(batteryCapacity)

class Electric extends Car {

  #chargeTime;
  #energyConsumption;
  constructor(manufacturer,model,chargeTime,energyConsumption){
    super(manufacturer,model,0);
    this.#chargeTime=chargeTime;
    this.#energyConsumption=energyConsumption;
  }
  // getter and setter method for chargeTime
  get chargeTime() {
    return this.#chargeTime;
  }

  set chargeTime(value) {
    this.#chargeTime=value;
  }

  // getter and setter method for energyConsumption
  get energyConsumption() {
    return this.#energyConsumption;
  }

  set energyConsumption(value) {
    this.#energyConsumption=value;
  }

  charge() {
    return `Charging in progress.`;
  }

  calculateDistanceByEnergy(batteryCapacity) {
    return batteryCapacity*this.#energyConsumption;
  }
}

// // Example invocation of Electric class
// const electricCar1 = new Electric("Tesla", "Model S", 8, 0.2);
// console.log(electricCar1.manufacturer); // Tesla
// console.log(electricCar1.model); // Model S
// console.log(electricCar1.chargeTime); // 8
// console.log(electricCar1.energyConsumption); // 0.2

// console.log(electricCar1.charge()); // Charging in progress.

// const batteryCapacity = 60;
// console.log(electricCar1.calculateDistanceByEnergy(batteryCapacity)); // 12

//---------------------------------------------------------
// 4. Bicycle Class

// Bicycle (extends Vehicle)
// ├── #type
// ├── #gear
// ├── ride()
// ├── changeGear(newGear)
// ├── calculateCaloriesBurned(distance, speed)
// ├── calculateAverageSpeed(distance, time)
// └── calculateWorkDone(frictionForce, distance)

class Bicycle extends Vehicle {
  #type;
  #gear;
  constructor(manufacturer,type){
    super(manufacturer);
    this.#type=type;
    this.gear=1;
  }

    // getter and setter method for type
  get type() {
    return this.#type;
  }

  set type(value) {
    this.#type=value;
  }

    // getter and setter method for gear
  get gear() {
    return this.#gear;
  }

  set gear(value) {
    this.#gear=value;
  }

  ride() {
    return `Enjoy your ride.`;
  }

  changeGear(newGear) {
    this.#gear=newGear;
    return `Changed gear to ${newGear}.`
  }

  calculateCaloriesBurned(distance, speed) {
    const line=distance*50;
    const increased=speed>20?(speed-20)*5:0;
    const estimate=line+increased;

    return line+increased;
  }

  calculateAverageSpeed(distance, time) {
    return distance/time;
  }

  calculateWorkDone(frictionForce, distance) {
    return frictionForce*distance;
  }
}

// // example invocation
// const bicycle = new Bicycle("BrandX", "Mountain Bike");
// console.log(bicycle.manufacturer); // BrandX
// console.log(bicycle.type); // Mountain Bike
// bicycle.type = "Road Bike";
// console.log(bicycle.type); // Road Bike
// console.log(bicycle.ride()); // Enjoy your ride.
// console.log(bicycle.changeGear(7)); // Changed gear to 7.
// console.log(bicycle.calculateCaloriesBurned(10, 15)); // Output: 500
// console.log(bicycle.calculateAverageSpeed(30, 2)); // 15
// console.log(bicycle.calculateWorkDone(10, 5)); // 50

//---------------------------------------------------------

//don't remove below export statement part
export { Vehicle, Car, Electric, Bicycle };
