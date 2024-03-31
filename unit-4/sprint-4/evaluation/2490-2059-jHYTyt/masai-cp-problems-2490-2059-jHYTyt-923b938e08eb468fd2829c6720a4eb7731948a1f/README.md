

# JS-FF-CF-CLASSES-STATIC-METHOD

## Submission Instructions [Please note]

## Maximum Marks - 30

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Installation
```
npm install --engine-strict
```
## Test
```
npm t
```
## Test (Watch mode)
```
npm t -- --watchAll
```
## file structure

most of your work would happen in the `src/index.js` file.
```
✅ Submit the problem [1 mark]

### Test cases for question1.js
----------------------------------------------
### Test cases for Problem 1
✅ Objects created by CreateApp1 have correct properties [1 mark]
✅ Objects created by CreateApp1 have correct methods [1 mark]
✅ getAppInfo,getPrice, decreasePrice, increasePrice, and,isPopular methods should be a prototype method [1 mark]

### Test cases for Problem 2
✅ Objects created using CreateApp2 (using constructor) are working as expected [1 mark]
✅ getAppInfo,getPrice, decreasePrice, increasePrice, and,isPopular method should be a prototype method [1 mark]

### Test cases for Problem 3
✅ Objects created using CreateApp3are working as expected [1 mark]
✅ getAppInfo,getPrice, decreasePrice, increasePrice, and,isPopular method should be a prototype method [1 mark]

### Test cases for question2.js
----------------------------------------------
### Test cases for Problem 4

### Test cases - Vehicle Class

✅ should create a new Vehicle instance with the given manufacturer [1 mark]
✅ should get the manufacturer using the static method getManufacturer [1 mark]
✅ should describe the vehicle [1 mark]
✅ should calculate acceleration correctly [1 mark]
✅ should set a new manufacturer value using setter [1 mark]

### Test cases - Car Class

✅ should create a new Car instance with the given manufacturer, model, and fuel efficiency [1 mark]
✅ should describe the car [1 mark]
✅ should calculate distance based on fuel amount and fuel efficiency [1 mark]

### Test cases - Electric Class

✅ should create a new Electric instance with the given manufacturer, model, charge time, and energy consumption [1 mark]
✅ should charge the electric car [1 mark]
✅ should calculate distance based on energy consumption and battery capacity [1 mark]

### Test cases - Bicycle Class

✅ should create a new Bicycle instance with the given manufacturer and type [1 mark]
✅ should change the bicycle type [1 mark]
✅ should change the bicycle gear [1 mark]
✅ should ride the bicycle [1 mark]
✅ should calculate calories burned based on distance and speed [1 mark]
✅ should calculate average speed based on distance and time [1 mark]
✅ should calculate work done based on friction force and distance [1 mark]

### Test cases for question3.js
----------------------------------------------
### Test cases for Problem 5

### Test cases for Guest

✅ should create a new Guest instance with the given name and age [1 mark]
✅ should display guest information [1 mark]

### Test cases for PartyGuest

✅ should create a new PartyGuest instance with the given name, age, role and should displayInfo method along with role [1 mark]
✅ should send and accept invitation [1 mark]

```

# question1.js 
<h2 style="color:#215dc8">
 Problem statement.1
</h2> 

- <p style="color: green">You are required to complete the method implementations within the existing structure, utilizing the <span style="font-weight:900">prototype-based approach.</span> </p>

Define a **factory function** called `CreateApp1` which takes in the following parameters:

1. `appName` (string): the appName of the app.
2. `rating` (number): the rating of the app.
3. `developer` (string): the developer for the app.
4. `category` (string): the category of the app.
5. `platform` (string): a platform for an app.
6. `price` (number): price for an app.

The function *returns* an object containing the app's details as properties, along with five methods `getAppInfo`, `getPrice`, `increasePrice`, `decreasePrice`, and `isPopular`.

- The `getAppInfo` method **returns** string with appName , rating and developer as `{appName} (Rating: {rating}) by {developer}`.
- The `getPrice` method **returns** the current `price` of the app.
- The `increasePrice` method increases the app's `price` by a given amount (number) **returns** **increased Price of the app**.
- The `decreasePrice` method decreases the app's `price` by a given amount (number) **returns** **decreased Price of the app**.
- The `isPopular` method **returns** a Boolean value based on whether the app's `rating` is `greater than or equal to` 3 or not.

The purpose of this code is to provide a reusable function that creates app objects with specific properties and methods that can be used to manipulate and get information about the app. This function can be used to create multiple app objects with different details based on the given parameters.

Example invocation with expected outputs:
```
// Example invocation
let app1 = CreateApp1("MyApp", 3.5, "MyCompany", "Utility", "iOS", 30000);

console.log(app1.appName) // MyApp
console.log(app1.rating) // 3.5
console.log(app1.developer) // MyCompany
console.log(app1.category) // Utility
console.log(app1.platform) // iOS
console.log(app1.price) // 4.99

console.log(app1.getAppInfo()); // MyApp (Rating: 1.0) by MyCompany
console.log(app1.getPrice()); //30000
console.log(app1.increasePrice(2000)); //32000
console.log(app1.decreasePrice(3000)); //29000
console.log(app1.getPrice()); //29000
console.log(app1.isPopular()); // true
```
<h2 style="color:#215dc8">
 Problem statement .2
</h2> 

Implement the functionality same as Problem 1. using `CreateApp2` ***constructor functions***.

- <p style="color: green">You are required to complete the method implementations within the existing structure, utilizing the <span style="font-weight:900">prototype-based approach.</span> </p>

Example invocation with expected outputs:
```
//Example invocation
let app2 = new CreateApp2(
  "MyApp",
  2,
  "creativeWorks",
  "Entertainment",
  "Android",
  14000
);

console.log(app2.appName); // MyApp
console.log(app2.rating); // 2
console.log(app2.developer); // creativeWorks
console.log(app2.category); // Entertainment
console.log(app2.platform); // Android
console.log(app2.price); // 14000

console.log(app2.getAppInfo()); // MyApp (Rating: 2) by creativeWorks
console.log(app2.getPrice()); //14000
console.log(app2.increasePrice(2000)); //16000
console.log(app2.decreasePrice(3000)); //13000
console.log(app2.getPrice()); //13000
console.log(app2.isPopular()); // false
```
<h2 style="color:#215dc8">
 Problem statement.3
</h2> 
Implement the functionality same as Problem 1. using `CreateApp3` ***ES6 Classes*** and ***constructor***.

- <p style="color: green">You are required to complete the method implementations within the existing structure, utilizing the <span style="font-weight:900">prototype-based approach.</span> </p>

Example invocation with expected outputs:
```
//Example invocation
let app3 = new CreateApp3(
  "MyApp",
  3,
  "YetcreativeWorks",
  "Games",
  "iOS",
  70000
);
console.log(app3.appName); // MyApp
console.log(app3.rating); // 3
console.log(app3.developer); // YetcreativeWorks
console.log(app3.category); // Games
console.log(app3.platform); // iOS
console.log(app3.price); // 70000

console.log(app3.getAppInfo()); // MyApp (Rating: 3) by YetcreativeWorks
console.log(app3.getPrice()); //70000
console.log(app3.increasePrice(3000)); //73000
console.log(app3.decreasePrice(3000)); //70000
console.log(app3.getPrice()); //70000
console.log(app3.isPopular()); // false
```


# question2.js 
<h2 style="color:#215dc8">
 Problem statement.4
</h2> 

Implement a concise JavaScript hierarchy for a vehicle system with three classes: `Vehicle`, `Car`, and `Bicycle`. Evaluate your understanding of class inheritance and JavaScript programming by comprehending the provided code and completing specified tasks in this coding challenge.

### 1. **Vehicle Class**

```
Vehicle
├── #manufacturer
├── static getManufacturer(vehicle)
├── describe()
└── calculateAcceleration(initialVelocity, finalVelocity, time)

```

#### Properties:
- `#manufacturer` (private): Represents the manufacturer of the vehicle which is a string.

#### Methods:
1. `constructor(manufacturer)`: Initializes the `#manufacturer` property with the provided value.
2. `get manufacturer()`: Getter method for the `#manufacturer` property.
3. `set manufacturer(value)`: Setter method for the `#manufacturer` property.
4. `static getManufacturer(vehicle)`: Static method that takes a `vehicle` instance and **returns** its manufacturer.
5. `describe()`: Method that **returns** a string describing the vehicle's manufacturer.
   - *return* : `A generic vehicle manufactured by {manufacturer}.`
6. `calculateAcceleration(initialVelocity, finalVelocity, time)`: Method that calculates and **returns** acceleration based on the provided parameters.
   - use formula 
   ```
   (finalVelocity - initialVelocity) / time
   ```

#### Example Usage:
```javascript
// Example invocation of Vehicle class
const vehicle1 = new Vehicle("Generic Motors");
console.log(vehicle1.manufacturer); // Generic Motors
console.log(vehicle1.describe()); // A generic vehicle manufactured by Generic Motors.
const initialVelocity = 20;
const finalVelocity = 60;
const time = 5;
console.log(
  vehicle1.calculateAcceleration(initialVelocity, finalVelocity, time)
); // 8
```

### 2. **Car Class (extends Vehicle)**

```
Car (extends Vehicle)
├── #model
├── #fuelEfficiency
└── calculateDistance(fuelAmount)
```

#### Properties:
- `#model` (private): Represents the model of the car.
- `#fuelEfficiency` (private): Represents the fuel efficiency of the car.

#### Methods:
1. `constructor(manufacturer, model, fuelEfficiency)`: Initializes properties using the parent constructor and additional properties specific to cars.
2. Getter and setter methods for `#model` and `#fuelEfficiency`.
3. `calculateDistance(fuelAmount)`: Method that calculates and **returns** the distance the car can cover based on fuel amount and fuel efficiency.
  - use formula 
  ```
  fuelAmount * fuelEfficiency
  ```

#### Example Usage:
```javascript
// Example invocation of Car class
const car1 = new Car("Toyota", "Camry", 25);

console.log(car1.manufacturer); // Toyota
console.log(car1.model); // Camry
console.log(car1.fuelEfficiency); // 25

console.log(car1.describe()); // A generic vehicle manufactured by Toyota.

const fuelAmount = 10;
console.log(car1.calculateDistance(fuelAmount)); // 250

```

### 3. **Electric Class (extends Car)**

```
Electric (extends Car)
├── #chargeTime
├── #energyConsumption
├── charge()
└──  calculateDistanceByEnergy(batteryCapacity)
```
#### Properties:
- `#chargeTime` (private): Represents the charging time for the electric car.
- `#energyConsumption` (private): Represents the energy consumption of the electric car.

- **Note** : Fuel efficiency is not applicable for electric cars. while using super method pass `fuelEfficiency` value have to be `default as 0`.

#### Methods:
1. `constructor(manufacturer, model, chargeTime, energyConsumption)`: Initializes properties using the parent constructor and additional properties specific to electric cars.
2. Getter and setter methods for `#chargeTime` and `#energyConsumption`.
3. `charge()`: Method that **returns** a string indicating that the electric car is charging.
    - *return* : `Charging in progress.`
4. `calculateDistanceByEnergy(batteryCapacity)`: Method that calculates and **returns** the distance the electric car can cover based on battery capacity and energy consumption.
    - *use formula* : ```batteryCapacity * energyConsumption;```

#### Example Usage:
```javascript
// Example invocation of Electric class
const electricCar1 = new Electric("Tesla", "Model S", 8, 0.2);
console.log(electricCar1.manufacturer); // Tesla
console.log(electricCar1.model); // Model S
console.log(electricCar1.chargeTime); // 8
console.log(electricCar1.energyConsumption); // 0.2

console.log(electricCar1.charge()); // Charging in progress.

const batteryCapacity = 60;
console.log(electricCar1.calculateDistanceByEnergy(batteryCapacity)); // 12
```

### 4. **Bicycle Class (extends Vehicle)**

```
Bicycle (extends Vehicle)
├── #type
├── #gear
├── ride()
├── changeGear(newGear)
├── calculateCaloriesBurned(distance, speed)
├── calculateAverageSpeed(distance, time)
└── calculateWorkDone(frictionForce, distance)
```

#### Properties:
- `#type` (private) (string): Represents the type of the bicycle
- `#gear` (private) (string): Represents the gear of the bicycle.

#### Methods:
1. `constructor(manufacturer, type, gear)`: Initializes properties using the parent constructor and additional properties specific to bicycles.
2. Getter and setter methods for `#type` and `#gear`.
3. `ride()`: Method that *returns* a string indicating to enjoy the bicycle ride.
    - *return* : `Enjoy your ride.`
4. `changeGear(newGear)`: Method that changes the gear of the bicycle and *returns* a string indicating the change.
   - *return* : `Changed gear to {gear}.`
5. `calculateCaloriesBurned(distance, speed)`: Method that calculates and *returns* the calories burned during a bicycle ride based on distance and speed.

   - *hint* : 
   ```
    calculateCaloriesBurned(distance, speed) {
    return estimatedCalories
   }

   - distance: This represents the distance traveled during the bicycle ride. The method multiplies this distance by a constant factor of 50.

    - for the increase in calories burned when the speed exceeds 20 units (whatever unit of speed is used). If the speed is greater than 20, it calculates the additional calories burned by taking the difference between the actual speed and 20, and then multiplies it by a constant factor of 5. If the speed is 20 or less, it adds 0 calories for the additional speed factor.

    -  there is a baseline caloric expenditure of 50 calories per unit of distance, and an additional 5 calories per unit of speed beyond 20 units.

    - const IncreasedCalories = 
        if speed > 20 ---> (actual speed - 20 ) * then multiplies it by a constant factor of 5
        else ---> 0

    - const estimatedCalories =  distance * constant factor (50) + IncreasedCalories 

    - example 1: 
         bicycle.calculateCaloriesBurned(10, 22);

         here distance = 10 and speed = 22

         then estimatedCalories = 15 * 50 + (22 - 20) * 5 = 510

         return 510

    - example 1: 
         bicycle.calculateCaloriesBurned(15, 18);

         here distance = 15 and speed = 18 

         then estimatedCalories = 15 * 50 + (0) = 750 

         return 750

   ```

6. `calculateAverageSpeed(distance, time)`: Method that calculates and *returns* the average speed of the bicycle based on distance and time.
   - *use formula* : `distance / time`
7. `calculateWorkDone(frictionForce, distance)`: Method that calculates and *returns* the work done during a bicycle ride based on friction force and distance.
   - *use formula* : `frictionForce * distance`

#### Example Usage:
```javascript
const bicycle = new Bicycle("BrandX", "Mountain Bike");
console.log(bicycle.manufacturer); // BrandX
console.log(bicycle.type); // Mountain Bike
bicycle.type = "Road Bike";
console.log(bicycle.type); // Road Bike

console.log(bicycle.ride()); // Enjoy your ride.
console.log(bicycle.changeGear(7)); // Changed gear to 7.

const caloriesBurned = bicycle.calculateCaloriesBurned(10, 15);
console.log(caloriesBurned); // 500

const averageSpeed = bicycle.calculateAverageSpeed(30, 2);
console.log(averageSpeed); // 15

const workDone = bicycle.calculateWorkDone(10, 5);
console.log(workDone); // 50
```

### Additional Notes:
- use prototype-based approach.

# question3.js 
<h2 style="color:#215dc8">
 Problem statement.5
</h2> 

### Question Statement:

1. create `Guest` constructor and its prototype method as`displayInfo`. 

2. `PartyGuest` constructor, with its prototype methods as 

   - bringGift(gift)
   - sendInvitation
   - acceptInvitation
   - declineInvitation
   - organizeParty
   - displayInfo


#### Guest Constructor:

- The Guest constructor function is a basic constructor function that takes two parameters, `name` and `age`, and creates instances with properties name and age. 

- It also has a prototype method `displayInfo` that *returns* a string containing the guest's name and age.

- Properties:
  - `name` (string): Represents the name of the guest.
  - `age` (number): Represents the age of the guest.
- Methods:
  - `constructor(name, age)`: Initializes the `name` and `age` properties with the provided values.
  - `displayInfo()`: *Returns* a string with the guest's name and age.
     - *return* : `Name: ${name} and Age: ${age}`

```
  // Example usage
  const guest1 = new Guest('John', 25);
  const guest2 = new Guest('Alice', 30);
  
  console.log(guest1.displayInfo()); // Output: Name: John and Age: 25
  console.log(guest2.displayInfo()); // Output: Name: Alice and Age: 30
```

#### PartyGuest Constructor:

The PartyGuest constructor function ***`extends`*** the Guest constructor function. This means it calls the Guest constructor with the appropriate parameters (name and age) to initialize the name and age properties of the PartyGuest instance.

Additionally, the PartyGuest constructor introduces new properties such as `role`, `gifts` (array), and `invitationStatus` (default value Pending).

The PartyGuest constructor has prototype methods like `bringGift`, `sendInvitation`, `acceptInvitation`, `declineInvitation`, and `organizeParty` that are specific to managing party-related functionality.

- Additional Properties:
  - `role` (string): Represents the role of the party guest.
  - `gifts` (array): An array representing gifts brought by the party guest.
  - `invitationStatus` (by default : Pending which is a string): Represents the invitation status (e.g., "Pending", "Sent", "Accepted", "Declined").

- Additional Methods:
  - `constructor(name, age, role, gifts)`: Initializes properties using the parent constructor and additional properties specific to party guests.
  - `bringGift(gift)`: Adds a gift to the array.
     - push gift to gifts array 
  - `sendInvitation()`: Sets the invitation status to "Sent". 
     - update invitationStatus to `Sent`
  - `acceptInvitation()`: Sets the invitation status to "Accepted".
       - update invitationStatus to `Accepted`
  - `declineInvitation()`: Sets the invitation status to "Declined".
      - update invitationStatus to `Declined`
  - `organizeParty()`: *Returns* a string indicating the party organization.
      - *return* : `Party organized by {name} with role {role}.`
 - `displayInfo()`: Overrides the method in the Guest constructor function to include additional information about the role.
     - return : `Name: {name}, Age: {age}, Role: {role}`

     - example : `Name: {name}, Age: {age}, Role: {role}`

```
  // Example usage
  const partyHost = new PartyGuest("Alice", 30, "Host");
  partyHost.bringGift("watch");
  console.log(partyHost.gifts); // [ 'watch' ]
  partyHost.bringGift("Party Hats");
  console.log(partyHost.gifts); //[ 'watch', 'Party Hats' ]

  partyHost.sendInvitation();
  console.log(partyHost.invitationStatus); // Sent

  partyHost.acceptInvitation();
  console.log(partyHost.invitationStatus); // Accepted

  console.log(partyHost.displayInfo()) // Name: Alice, Age: 30, Role: Host

  console.log(partyHost.organizeParty()); // Party organized by Alice with role Host.

```

### Tested on cp.masaischool.com

<figure>
  <img src="https://i.imgur.com/VZBuqOW.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Tested</figcaption>
</figure>

### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time 
