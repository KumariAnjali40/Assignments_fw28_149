import { Vehicle, Car, ElectricCar } from "../question1";
import { Person, Student, Professor, TeachingAssistant } from "../question2";
import { Employee, Manager, Executive } from "../question3";

global.score = 1;
const vehicle = new Vehicle(
  "Manufacturer",
  "Model",
  2023,
  "Red",
  "LICENSE123",
  10000,
  "Gasoline"
);

const tataCivic = new Car(
  "tata",
  "Civic",
  2023,
  "Blue",
  "tata001",
  0,
  "Gasoline",
  4,
  5
);

const teslaModelS = new ElectricCar(
  "Tesla",
  "Model S",
  2023,
  "Red",
  "TESLA001",
  0,
  4,
  5,
  85
);
//test cases for Vehicle CF
describe("Vehicle CF", () => {
  test("Vehicle should have required properties.", () => {
    expect(vehicle.manufacturer).toBe("Manufacturer");
    expect(vehicle.model).toBe("Model");
    expect(vehicle.year).toBe(2023);
    expect(vehicle.color).toBe("Red");
    expect(vehicle.licensePlate).toBe("LICENSE123");
    expect(vehicle.mileage).toBe(10000);
    expect(vehicle.fuelType).toBe("Gasoline");
    global.score += 1;
  });

  test("Vehicle methods works correctly", () => {
    expect(vehicle.start()).toContain("Manufacturer Model engine started");
    expect(vehicle.stop()).toContain("Manufacturer Model engine stopped");
    expect(vehicle.accelerate(60)).toContain(
      "Manufacturer Model is accelerating to 60 mph"
    );
    expect(vehicle.brake()).toContain("Manufacturer Model is applying brakes");
    global.score += 1;
  });
});

describe("test cases for car object", () => {
  test("Car should correctly create a Car instance and has correct properties", () => {
    expect(tataCivic).toBeInstanceOf(Car);
    expect(tataCivic.manufacturer).toBe("tata");
    expect(tataCivic.model).toBe("Civic");
    expect(tataCivic.year).toBe(2023);
    expect(tataCivic.color).toBe("Blue");
    expect(tataCivic.licensePlate).toBe("tata001");
    expect(tataCivic.mileage).toBe(0);
    expect(tataCivic.fuelType).toBe("Gasoline");
    expect(tataCivic.numDoors).toBe(4);
    expect(tataCivic.numSeats).toBe(5);
    global.score += 1;
  });

  test("Car should have methods inherited from Vehicle", () => {
    expect(tataCivic.start()).toContain("tata Civic engine started");
    expect(tataCivic.accelerate(40)).toContain(
      "tata Civic is accelerating to 40 mph"
    );
    expect(tataCivic.stop(40)).toContain("tata Civic engine stopped");
    global.score += 1;
  });

  test("Car should have Car-specific methods", () => {
    expect(tataCivic.lock()).toContain("tata Civic doors locked");
    expect(tataCivic.adjustSeatPosition("next to diver")).toContain(
      "tata Civic seat position adjusted to next to diver"
    );
    expect(tataCivic.playMusic()).toContain("tata Civic is playing music");
    expect(tataCivic.unlock()).toContain("tata Civic doors unlocked");
    global.score += 1;
  });

  test("should have prototype chaining of Car to Vehicle", () => {
    expect(Car.prototype.__proto__ == Vehicle.prototype).toBe(true);
    global.score += 1;
  });
});

describe("ElectricCar class", () => {
  test("should correctly create an ElectricCar instance and has correct properties", () => {
    expect(teslaModelS).toBeInstanceOf(ElectricCar);
    expect(teslaModelS.manufacturer).toBe("Tesla");
    expect(teslaModelS.model).toBe("Model S");
    expect(teslaModelS.year).toBe(2023);
    expect(teslaModelS.color).toBe("Red");
    expect(teslaModelS.licensePlate).toBe("TESLA001");
    expect(teslaModelS.mileage).toBe(0);
    expect(teslaModelS.fuelType).toBe("Electric");
    expect(teslaModelS.numDoors).toBe(4);
    expect(teslaModelS.numSeats).toBe(5);
    expect(teslaModelS.batteryCapacity).toBe(85);
    expect(teslaModelS.chargeLevel).toBe(100);

    global.score += 1;
  });

  test("should have methods inherited from Car and Vehicle", () => {
    expect(teslaModelS.start()).toContain("Tesla Model S engine started");
    expect(teslaModelS.stop()).toContain("Tesla Model S engine stopped");
    expect(teslaModelS.accelerate(60)).toBe(
      "Tesla Model S is accelerating to 60 mph."
    );
    global.score += 1;
  });

  test("should have ElectricCar-specific methods", () => {
    expect(teslaModelS.charge()).toContain("Tesla Model S is charging");
    expect(teslaModelS.driveElectric()).toContain(
      "Tesla Model S is driving using electric power"
    );
    expect(teslaModelS.checkChargeLevel()).toContain(
      "Tesla Model S has 100% charge"
    );
    global.score += 1;
  });

  test("should have prototype chaining of ElectricCar to Car", () => {
    expect(ElectricCar.prototype.__proto__ == Car.prototype).toBe(true);
    global.score += 1;
  });
});

describe("Person", () => {
  const person = new Person("Bob", 30, "Male");

  test("should correctly create a Person instance and properties", () => {
    expect(person).toBeInstanceOf(Person);
    expect(person.name).toBe("Bob");
    expect(person.age).toBe(30);
    expect(person.gender).toBe("Male");
    global.score += 1;
  });

  test("Person should have methods used correctly", () => {
    const introduction = person.introduce();
    expect(introduction).toContain(
      "Hello, my name is Bob. I am 30 years old and identify as Male"
    );
    const greeting = person.greet();
    expect(greeting).toContain("Greetings from Bob");

    global.score += 1;
  });
});

describe("Student", () => {
  const student = new Student(
    "David",
    22,
    "Male",
    "ST56789",
    "Mechanical Engineering"
  );

  test("Student should correctly create a Student instance and properties", () => {
    expect(student).toBeInstanceOf(Student);
    expect(student.name).toBe("David");
    expect(student.age).toBe(22);
    expect(student.gender).toBe("Male");
    expect(student.studentID).toBe("ST56789");
    expect(student.major).toBe("Mechanical Engineering");
    global.score += 1;
  });

  test("Student should have all required methods", () => {
    const enrollment = student.enroll("Thermodynamics");
    expect(enrollment).toContain("David is enrolling in Thermodynamics");

    const submission = student.submitAssignment("Heat Transfer");
    expect(submission).toContain(
      "David is submitting Heat Transfer for evaluation"
    );

    const grades = student.getGrades();
    expect(grades).toContain("David is retrieving their grades");

    const stringRep = student.toString();
    expect(stringRep).toBe("Student: David, Major: Mechanical Engineering");

    global.score += 1;
  });

  test("should have prototype chaining of Student to Person", () => {
    expect(Student.prototype.__proto__ == Person.prototype).toBe(true);
    global.score += 1;
  });
});

describe("Professor", () => {
  const professor = new Professor(
    "Dr. Smith",
    45,
    "Male",
    "EMP123",
    "Computer Science"
  );

  test("should correctly create a Professor instance and properties", () => {
    expect(professor).toBeInstanceOf(Professor);
    expect(professor.name).toBe("Dr. Smith");
    expect(professor.age).toBe(45);
    expect(professor.gender).toBe("Male");
    expect(professor.employeeID).toBe("EMP123");
    expect(professor.department).toBe("Computer Science");
    global.score += 1;
  });

  test("Professor should have all required methods", () => {
    const teaching = professor.teach("Software Engineering");
    expect(teaching).toContain("Dr. Smith is teaching Software Engineering");
    const grading = professor.gradeAssignment("Final Project");
    expect(grading).toContain("Dr. Smith is grading Final Project");
    const officeHours = professor.holdOfficeHours();
    expect(officeHours).toContain("Dr. Smith is holding office hours");
    const stringRep = professor.toString();
    expect(stringRep).toContain(
      "Professor: Dr. Smith, Department: Computer Science"
    );
    global.score += 1;
  });

  test("should have prototype chaining of Professor to Person", () => {
    expect(Professor.prototype.__proto__ == Person.prototype).toBe(true);
    global.score += 1;
  });
});

describe("TeachingAssistant", () => {
  const ta = new TeachingAssistant(
    "John",
    25,
    "Male",
    "TA987",
    "Data Structures"
  );

  test("should correctly create a TeachingAssistant instance and properties", () => {
    expect(ta).toBeInstanceOf(TeachingAssistant);
    expect(ta.name).toBe("John");
    expect(ta.age).toBe(25);
    expect(ta.gender).toBe("Male");
    expect(ta.employeeID).toBe("TA987");
    expect(ta.course).toBe("Data Structures");
    global.score += 1;
  });

  test("TeachingAssistant should have all required methods", () => {
    const assisting = ta.assistProfessor();
    expect(assisting).toContain("John is assisting the professor");
    const feedback = ta.provideFeedback("Homework 3");
    expect(feedback).toContain("John is providing feedback on Homework 3");
    const officeHours = ta.scheduleOfficeHours();
    expect(officeHours).toContain("John is scheduling office hours");
    const stringRep = ta.toString();
    expect(stringRep).toBe("Teaching Assistant: John, Course: Data Structures");
    global.score += 1;
  });

  test("should have chaining of TeachingAssistant to Person", () => {
    expect(TeachingAssistant.prototype.__proto__ == Person.prototype).toBe(
      true
    );
    global.score += 1;
  });
});

describe("Employee", () => {
  const employee = new Employee("Z04c", "rahul kapoor", 25, "IT");

  it("should create an instance of Employee with correct properties", () => {
    expect(employee.employeeID).toBe("Z04c");
    expect(employee.name).toBe("rahul kapoor");
    expect(employee.age).toBe(25);
    expect(employee.department).toBe("IT");
    global.score += 1;
  });

  it("should return the employee ID", () => {
    expect(employee.getEmployeeID()).toBe("Z04c");
    global.score += 1;
  });

  it("should return the introduction of the employee", () => {
    const introduction = employee.introduce();
    expect(introduction).toContain("Hello, my name is rahul kapoor");
    expect(introduction).toContain("I work in the IT department");
    global.score += 1;
  });

  it("should return the message for performing work duties", () => {
    const workMessage = employee.performWork();
    expect(workMessage).toContain("rahul kapoor is performing their work duties");
    global.score += 1;
  });
});

describe("Manager", () => {
  it("should create an instance of Manager with correct properties", () => {
    const manager = new Manager("M456", "Jane Kapoor", 40, "HR", 10);
    expect(manager.employeeID).toBe("M456");
    expect(manager.name).toBe("Jane Kapoor");
    expect(manager.age).toBe(40);
    expect(manager.department).toBe("HR");
    expect(manager.teamSize).toBe(10);
    global.score += 1;
  });

  // Test for assignTask method
  it("should return the message for assigning a task", () => {
    const manager = new Manager("M456", "Jane Kapoor", 40, "HR", 10);
    const employee = { name: "John Doe" }; // Mock employee object
    const taskAssignment = manager.assignTask("Project presentation", employee);
    expect(taskAssignment).toContain(
      'Jane Kapoor assigned the task "Project presentation" to John Doe'
    );
    global.score += 1;
  });

  // Test for conductMeeting method
  it("should return the message for conducting a meeting", () => {
    const manager = new Manager("M456", "Jane Kapoor", 40, "HR", 10);
    const meetingMessage = manager.conductMeeting();
    expect(meetingMessage).toContain(
      "Jane Kapoor is conducting a meeting with their team"
    );
    global.score += 1;
  });

  // Test for reviewPerformance method
  it("should return the message for reviewing performance", () => {
    const manager = new Manager("M456", "Jane Kapoor", 40, "HR", 10);
    const employee = { name: "John Doe" }; // Mock employee object
    const reviewMessage = manager.reviewPerformance(employee);
    expect(reviewMessage).toContain(
      "Jane Kapoor is reviewing the performance of John Doe"
    );
    global.score += 1;
  });

  // Test for introduce method with different data
  it("should return the introduction with different data", () => {
    const manager = new Manager("M789", "Alex Kapoor", 35, "Finance", 5);
    const introduction = manager.introduce();
    expect(introduction).toContain("Hello, my name is Alex Kapoor");
    expect(introduction).toContain("I work in the Finance department");
    global.score += 1;
  });

  test("should have prototype chaining of Manager to Employee", () => {
    expect(Manager.prototype.__proto__ == Employee.prototype).toBe(true);
    global.score += 1;
  });
});

describe("Executive", () => {
  it("should create an instance of Executive with correct properties", () => {
    const executive = new Executive(
      "X789",
      "Alice Kapoor",
      50,
      "Finance",
      5,
      10000,
      "CFO"
    );
    expect(executive.employeeID).toBe("X789");
    expect(executive.name).toBe("Alice Kapoor");
    expect(executive.age).toBe(50);
    expect(executive.department).toBe("Finance");
    expect(executive.teamSize).toBe(5);
    expect(executive.stockOptions).toBe(10000);
    expect(executive.executiveLevel).toBe("CFO");
    global.score += 1;
  });

  it("should return the message for making strategic decisions", () => {
    const executive = new Executive(
      "X789",
      "Alice Kapoor",
      50,
      "Finance",
      5,
      10000,
      "CFO"
    );
    const decisionMessage = executive.makeStrategicDecisions();
    expect(decisionMessage).toContain(
      "Alice Kapoor is making strategic decisions for the organization"
    );
    global.score += 1;
  });

  it("should return the message for approving budget", () => {
    const executive = new Executive(
      "X789",
      "Alice Kapoor",
      50,
      "Finance",
      5,
      10000,
      "CFO"
    );
    const approveMessage = executive.approveBudget();
    expect(approveMessage).toContain(
      "Alice Kapoor is approving the budget for various departments"
    );
    global.score += 1;
  });

  it("should return the message for representing the company", () => {
    const executive = new Executive(
      "X789",
      "Alice Kapoor",
      50,
      "Finance",
      5,
      10000,
      "CFO"
    );
    const representMessage = executive.representCompany();
    expect(representMessage).toContain(
      "Alice Kapoor is representing the company in external meetings or events"
    );
    global.score += 1;
  });

  it("should return the correct employee ID for the executive", () => {
    const executive = new Executive(
      "X987",
      "David Kapoor",
      45,
      "Marketing",
      8,
      7500,
      "CMO"
    );
    const employeeID = executive.getEmployeeID();
    expect(employeeID).toBe("X987");
    global.score += 1;
  });

  test("should have prototype chaining of Executive to Manager", () => {
    expect(Executive.prototype.__proto__ == Manager.prototype).toBe(true);
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
