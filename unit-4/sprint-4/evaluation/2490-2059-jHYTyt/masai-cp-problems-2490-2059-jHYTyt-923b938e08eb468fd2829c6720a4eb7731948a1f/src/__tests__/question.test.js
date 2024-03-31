import { CreateApp1, CreateApp2, CreateApp3 } from "../question1";
import { Vehicle, Car, Electric, Bicycle } from "../question2";
import { Guest, PartyGuest } from "../question3";

global.score = 1;

///**************************Test cases for question1.js */
describe("CreateApp1", () => {
  const app1 = CreateApp1(
    "Masai App",
    2.5,
    "Vision",
    "Utility 3",
    "MAC",
    17000
  );
  const app2 = CreateApp1(
    "HUKUMU app",
    5,
    "clearDot",
    "Utility min",
    "IOS",
    25682
  );

  test("objects created by CreateApp1 has correct properties", () => {
    expect(typeof app1).toBe("object");
    expect(app1.appName).toBe("Masai App");
    expect(app1.rating).toBe(2.5);
    expect(app1.developer).toBe("Vision");
    expect(app1.category).toBe("Utility 3");
    expect(app1.platform).toBe("MAC");
    expect(app1.price).toBe(17000);

    expect(typeof app2).toBe("object");
    expect(app2.appName).toBe("HUKUMU app");
    expect(app2.rating).toBe(5);
    expect(app2.developer).toBe("clearDot");
    expect(app2.category).toBe("Utility min");
    expect(app2.platform).toBe("IOS");
    expect(app2.price).toBe(25682);

    global.score += 1;
  });

  test("objects created by CreateApp1 has correct methods", () => {
    expect(app1.getPrice()).toBe(17000);
    expect(app1.increasePrice(300)).toBe(17300);
    expect(app1.getPrice()).toBe(17300);
    expect(app1.decreasePrice(400)).toBe(16900);
    expect(app1.getPrice()).toBe(16900);
    expect(app1.isPopular()).toBe(false);

    expect(app2.getPrice()).toBe(25682);
    expect(app2.increasePrice(18)).toBe(25700);
    expect(app2.getPrice()).toBe(25700);
    expect(app2.decreasePrice(100)).toBe(25600);
    expect(app2.getPrice()).toBe(25600);
    expect(app2.isPopular()).toBe(true);

    global.score += 1;
  });

  test("getAppInfo ,getPrice , decreasePrice , increasePrice and ,isPopular method should be a prototype method", () => {
    expect(app1.getPrice).toBe(CreateApp1.prototype.getPrice);
    expect(app1.decreasePrice).toBe(CreateApp1.prototype.decreasePrice);
    expect(app1.increasePrice).toBe(CreateApp1.prototype.increasePrice);
    expect(app1.isPopular).toBe(CreateApp1.prototype.isPopular);
    global.score += 1;
  });
});
describe("CreateApp2", () => {
  const app = new CreateApp2("VI app", 5.2, "great", "mini", "IOS", 1200);
  test("Objects created using CreateApp2 (using constructor) are working as expected", () => {
    expect(typeof app).toBe("object");
    expect(app.appName).toBe("VI app");
    expect(app.rating).toBe(5.2);
    expect(app.developer).toBe("great");
    expect(app.category).toBe("mini");
    expect(app.platform).toBe("IOS");
    expect(app.price).toBe(1200);

    expect(app.getPrice()).toBe(1200);
    expect(app.increasePrice(300)).toBe(1500);
    expect(app.getPrice()).toBe(1500);
    expect(app.decreasePrice(400)).toBe(1100);
    expect(app.getPrice()).toBe(1100);
    expect(app.isPopular()).toBe(true);

    global.score += 1;
  });

  test("getAppInfo ,getPrice , decreasePrice , increasePrice and ,isPopular method should be a prototype method", () => {
    expect(CreateApp2.prototype.hasOwnProperty("getPrice")).toBe(true);
    expect(CreateApp2.prototype.hasOwnProperty("decreasePrice")).toBe(true);
    expect(CreateApp2.prototype.hasOwnProperty("increasePrice")).toBe(true);
    expect(CreateApp2.prototype.hasOwnProperty("isPopular")).toBe(true);

    global.score += 1;
  });
});
describe("CreateApp3", () => {
  const app = new CreateApp3("Course app", 4, "TCS", "ASUS", "Android", 100);
  test("objects created using CreateApp3 are working as expected", () => {
    expect(typeof app).toBe("object");
    expect(app.appName).toBe("Course app");
    expect(app.rating).toBe(4);
    expect(app.developer).toBe("TCS");
    expect(app.category).toBe("ASUS");
    expect(app.platform).toBe("Android");
    expect(app.price).toBe(100);

    expect(app.getPrice()).toBe(100);
    expect(app.increasePrice(100)).toBe(200);
    expect(app.getPrice()).toBe(200);
    expect(app.decreasePrice(200)).toBe(0);
    expect(app.getPrice()).toBe(0);
    expect(app.isPopular()).toBe(true);

    global.score += 1;
  });

  test("getAppInfo ,getPrice , decreasePrice , increasePrice and ,isPopular method should be a prototype method", () => {
    expect(CreateApp2.prototype.hasOwnProperty("getPrice")).toBe(true);
    expect(CreateApp2.prototype.hasOwnProperty("decreasePrice")).toBe(true);
    expect(CreateApp2.prototype.hasOwnProperty("increasePrice")).toBe(true);
    expect(CreateApp2.prototype.hasOwnProperty("isPopular")).toBe(true);
    global.score += 1;
  });
});

///************************Test cases for question2.js */

describe("Vehicle Class", () => {
  test("should create a new Vehicle instance with the given manufacturer", () => {
    const vehicle = new Vehicle("Test Motors");
    expect(vehicle.manufacturer).toBe("Test Motors");
    global.score += 1;
  });

  test("should get the manufacturer using static method getManufacturer", () => {
    const vehicle = new Vehicle("Test Motors");
    const result = Vehicle.getManufacturer(vehicle);
    expect(result).toBe("Test Motors");
    global.score += 1;
  });

  test("should describe the vehicle", () => {
    const vehicle = new Vehicle("Test Motors");
    const description = vehicle.describe();
    expect(description).toBe("A generic vehicle manufactured by Test Motors.");
    global.score += 1;
  });

  test("should calculate acceleration correctly", () => {
    const vehicle = new Vehicle("Test Motors");
    const initialVelocity = 20;
    const finalVelocity = 60;
    const time = 5;
    const acceleration = vehicle.calculateAcceleration(
      initialVelocity,
      finalVelocity,
      time
    );
    expect(acceleration).toBe(8);
    global.score += 1;
  });

  test("should set a new manufacturer value using setter", () => {
    const vehicle = new Vehicle("Test Motors");
    vehicle.manufacturer = "New Motors";
    expect(vehicle.manufacturer).toBe("New Motors");
    global.score += 1;
  });
});

describe("Car Class", () => {
  let car;

  beforeEach(() => {
    car = new Car("Honda", "Civic", 30);
  });

  it("should create a new Car instance with the given manufacturer, model, and fuel efficiency", () => {
    expect(car.manufacturer).toBe("Honda");
    expect(car.model).toBe("Civic");
    expect(car.fuelEfficiency).toBe(30);
    global.score += 1;
  });

  it("should describe the car", () => {
    const description = car.describe();
    expect(description).toBe("A generic vehicle manufactured by Honda.");
    global.score += 1;
  });

  it("should calculate distance based on fuel amount and fuel efficiency", () => {
    const fuelAmount = 12; // Updated fuel amount
    expect(car.calculateDistance(fuelAmount)).toBe(360);
    global.score += 1;
  });
});

describe("Electric Class", () => {
  let electricCar;

  beforeEach(() => {
    electricCar = new Electric("Nissan", "Leaf", 10, 0.15);
  });

  it("should create a new Electric instance with the given manufacturer, model, charge time, and energy consumption", () => {
    expect(electricCar.manufacturer).toBe("Nissan");
    expect(electricCar.model).toBe("Leaf");
    expect(electricCar.chargeTime).toBe(10);
    expect(electricCar.energyConsumption).toBe(0.15);
    global.score += 1;
  });

  it("should charge the electric car", () => {
    const chargingStatus = electricCar.charge();
    expect(chargingStatus).toBe("Charging in progress.");
    global.score += 1;
  });

  it("should calculate distance based on energy consumption and battery capacity", () => {
    const batteryCapacity = 80;
    expect(electricCar.calculateDistanceByEnergy(batteryCapacity)).toBe(12);
    global.score += 1;
  });
});

describe("Bicycle Class", () => {
  let bicycle;

  beforeEach(() => {
    bicycle = new Bicycle("Giant", "Road Bike");
  });

  it("should create a new Bicycle instance with the given manufacturer and type", () => {
    expect(bicycle.manufacturer).toBe("Giant");
    expect(bicycle.type).toBe("Road Bike");
    global.score += 1;
  });

  it("should change the bicycle type", () => {
    bicycle.type = "Mountain Bike";
    expect(bicycle.type).toBe("Mountain Bike");
    global.score += 1;
  });

  it("should change the bicycle gear", () => {
    const gearChangeResult = bicycle.changeGear(10);
    expect(gearChangeResult).toBe("Changed gear to 10.");
    expect(bicycle.gear).toBe(10);
    global.score += 1;
  });

  it("should ride the bicycle", () => {
    const rideResult = bicycle.ride();
    expect(rideResult).toBe("Enjoy your ride.");
    global.score += 1;
  });

  it("should calculate calories burned based on distance and speed", () => {
    const caloriesBurned = bicycle.calculateCaloriesBurned(15, 20);
    expect(caloriesBurned).toBe(750);
    global.score += 1;
  });

  it("should calculate average speed based on distance and time", () => {
    const averageSpeed = bicycle.calculateAverageSpeed(40, 2.5);
    expect(averageSpeed).toBe(16);
    global.score += 1;
  });

  it("should calculate work done based on friction force and distance", () => {
    const workDone = bicycle.calculateWorkDone(12, 7);
    expect(workDone).toBe(84);
    global.score += 1;
  });
});
///**************************Test cases for question3.js */

describe("Guest", () => {
  let guest;

  beforeEach(() => {
    guest = new Guest("john", 23);
  });

  it("should create a new Guest instance with the given name and age", () => {
    expect(guest.name).toBe("john");
    expect(guest.age).toBe(23);
    global.score += 1;
  });

  it("should display guest information", () => {
    const info = guest.displayInfo();
    expect(info).toBe("Name: john and Age: 23");
    global.score += 1;
  });
});

describe("PartyGuest", () => {
  let partyGuest;

  beforeEach(() => {
    partyGuest = new PartyGuest("Alice", 30, "Host");
  });

  it("should create a new PartyGuest instance with the given name, age, role and should displayInfo method along with role", () => {
    expect(partyGuest.name).toBe("Alice");
    expect(partyGuest.age).toBe(30);
    expect(partyGuest.role).toBe("Host");

    const info = partyGuest.displayInfo();
    expect(info).toBe("Name: Alice, Age: 30, Role: Host");
    global.score += 1;
  });


  it("should send and accept invitation", () => {
    partyGuest.sendInvitation();
    expect(partyGuest.invitationStatus).toBe("Sent");
    partyGuest.acceptInvitation();
    expect(partyGuest.invitationStatus).toBe("Accepted");

    const info = partyGuest.organizeParty();

    expect(info).toBe("Party organized by Alice with role Host.");

    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
