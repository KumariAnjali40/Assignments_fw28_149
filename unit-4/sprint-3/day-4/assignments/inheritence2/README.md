# JS-PT-WEB14-S2-A2

#### Object inheritance Prototype

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

## Maximum marks - 38

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example /js-201 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## file structure

Most of your work would happen in the 
 - `src/question1.js` , 
 - `src/question2.js` and
 - `src/question3.js` files.

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

### Test cases

```
 ✅ able to submit the app - 1 mark ( minimum score )

 ### Test cases for question1.js 

 --- test cases for Vehicle CF ---
 ✅  Vehicle should have required properties. - 1 mark
 ✅  Vehicle methods work correctly- 1 mark

 ---test cases for Car CF ---
 ✅  Car should correctly create a Car instance and has correct properties- 1 mark
 ✅  Car should have methods inherited from Vehicle - 1 mark
 ✅  Car should have Car-specific methods - 1 mark
 ✅  should have prototype chaining of Car to Vehicle - 1 mark

 ---test cases for ElectricCar CF ---
 ✅  should correctly create an ElectricCar instance and has correct properties- 1 mark
 ✅  should have methods inherited from Car and Vehicle - 1 mark
 ✅  should have ElectricCar-specific methods - 1 mark
 ✅  should have prototype chaining of ElectricCar to Car - 1 mark

 ### Test cases for question2.js 

 --- test cases for Person CF ---
 ✅  should correctly create a Person instance and properties - 1 mark
 ✅  Person should have methods used correctly- 1 mark

 ---test cases for Student CF ---
 ✅  Student should correctly create a Student instance and properties- 1 mark
 ✅  Student should have all required methods - 1 mark
 ✅  should have prototype chaining of Student to Person - 1 mark

 ---test cases for Professor CF ---
 ✅  should correctly create a Professor instance and properties- 1 mark
 ✅  Professor should have all required methods - 1 mark
 ✅  should have prototype chaining of Professor to Person - 1 mark

 ---test cases for TeachingAssistant CF ---
 ✅  should correctly create a TeachingAssistant instance and properties- 1 mark
 ✅  TeachingAssistant should have all required methods - 1 mark
 ✅  should have chaining of TeachingAssistant to Person - 1 mark

 ### Test cases for question3.js 

 --- test cases for Employee CF ---
 ✅  should create an instance of Employee with correct properties - 1 mark
 ✅  should return the employee ID- 1 mark
 ✅  should return the introduction of the employee - 1 mark
 ✅  should return the message for performing work duties- 1 mark

 ---test cases for Manager CF ---
 ✅  should create an instance of Manager with correct properties- 1 mark
 ✅  should return the message for assigning a task- 1 mark
 ✅  should return the message for conducting a meeting- 1 mark
 ✅  should return the message for reviewing performance- 1 mark
 ✅  should return the introduction with different data- 1 mark
 ✅  should have prototype chaining of Manager to Employee- 1 mark

 ---test cases for Executive CF ---
 ✅  should create an instance of Executive with correct properties- 1 mark
 ✅  should return the message for making strategic decisions- 1 mark
 ✅  should return the message for approving budget- 1 mark
 ✅  should return the message for representing the company- 1 mark
 ✅  should return the correct employee ID for the executive- 1 mark
 ✅  should have prototype chaining of Executive to Manager- 1 mark

```
_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>._

## question1.js  [10]

<h3 style="color:#215dc8">
Problem 1: Implement a class hierarchy using constructor functions that model a vehicle.
</h3>

- Implement a class hierarchy using constructor functions that model a vehicle. The hierarchy should include three constructor functions: **`Vehicle`**, **`Car`**, and **`ElectricCar`**.

- The **`Car`** constructor should inherit from **`Vehicle`**, and **`ElectricCar`** should inherit from **`Car`**.

- Each constructor should have its own properties and methods, and all constructors should use the **`.call`** method to properly set the context for inheritance. `except the parent class`

- Your task is to implement the constructors and demonstrate the inheritance chain by creating instances of each constructor and accessing their properties and methods.

**Here is the hierarchical tree representation:**

```jsx
   Vehicle
      |
     Car
      |
 ElectricCar
```

1. **Vehicle:**
    - **`properties`**:
        1. `manufacturer` (String): The company that produced the vehicle.
        2. `model` (String): The specific model name of the vehicle.
        3. `year` (number): The manufacturing year of the vehicle.
        4. `color` (String): The color of the vehicle.
        5. `licensePlate` (String): The license plate number of the vehicle.
        6. `mileage` (number): The total mileage of the vehicle.
        7. `fuelType` (String): The type of fuel the vehicle uses (e.g., gasoline, diesel).
    - **`Methods`**:
        1. `start()`: **`returns`** a string as `{manufacturer} {model} engine started.`
        2. `stop()`: **`returns`** a string as `{manufacturer} {model} engine stopped.`
        3. `accelerate(speed)`: **`returns`** a string as `{manufacturer} {model} is accelerating to {speed} mph.`  
           - where **speed** is input 
        4. `brake()`: **`returns`** a string as `{manufacturer} {model} is applying brakes.`

  <h4 style="color:#ffa700">Example for Vehicle</h4>

```
const genericVehicle = new Vehicle(
  "Generic",
  "Vehicle",
  2023,
  "Black",
  "GENERIC001",
  0,
  "Unknown"
);

//properties
console.log(genericVehicle.manufacturer); // Generic
console.log(genericVehicle.model); // Vehicle
console.log(genericVehicle.year); // 2023
console.log(genericVehicle.color); // Black
console.log(genericVehicle.licensePlate); // GENERIC001
console.log(genericVehicle.mileage); // 0
console.log(genericVehicle.fuelType); // Unknown

//methods
console.log(genericVehicle.start()); // Generic Vehicle engine started.
console.log(genericVehicle.accelerate(30)); // Generic Vehicle is accelerating to 30 mph.
console.log(genericVehicle.stop()); // Generic Vehicle engine stopped.
```
1. **Car (inherits from Vehicle)**:
    - **`Additional properties`**:
        1. `numDoors` (number): The number of doors the car has.
        2. `numSeats` (number): The number of seats available in the car.
    - **`Additional methods`**:
        1. `lock()`: **`returns`** a string as `{manufacturer} {model} doors locked.`
        2. `unlock()`: **`returns`** a string as `{manufacturer} {model} doors unlocked.`
        3. `adjustSeatPosition(position)`: **`returns`** a string as `{manufacturer} {model} seat position adjusted to {position}.`
           - where **position** is input
           - Adjusts the position of the seat in the car.
        4. `playMusic()`: **`returns`** a string as `{manufacturer} {model} is playing music.`

  <h4 style="color:#ffa700">Example for Car</h4>

```

const hondaCivic = new Car(
  "Honda",
  "Civic",
  2023,
  "Blue",
  "HONDA001",
  0,
  "Gasoline",
  4,
  5
);

//properties
console.log(hondaCivic.manufacturer); // Honda
console.log(hondaCivic.model); //Civic
console.log(hondaCivic.year); // 2023
console.log(hondaCivic.color); // Blue
console.log(hondaCivic.licensePlate); // HONDA001
console.log(hondaCivic.mileage); // 0
console.log(hondaCivic.fuelType); // Gasoline
console.log(hondaCivic.numDoors); // 4
console.log(hondaCivic.numSeats); // 5

//methods
console.log(hondaCivic.lock()); //Honda Civic doors locked.
console.log(hondaCivic.adjustSeatPosition("Driver")); //Honda Civic seat position adjusted to Driver.
console.log(hondaCivic.playMusic()); //Honda Civic is playing music.
console.log(hondaCivic.unlock()); //Honda Civic doors unlocked.
```
2. **ElectricCar (inherits from Car)**:
    - **`Additional properties`**:
        1. `batteryCapacity` (number): The capacity of the electric car's battery.
        2. `chargeLevel` (number): The current level of charge in the battery. (The default value should be 100);
        3. The fuelType should be "Electric" by default.
    - **`Additional methods`**:
        1. `charge()`: **`returns`** a string as `{manufacturer} {model} is charging.`
        2. `checkChargeLevel()`: **`returns`** a string as `{manufacturer} {model} has {chargeLevel}% charge.`
        3. `driveElectric()`: **`returns`** a string as `${manufacturer} ${model} is driving using electric power.`


  <h4 style="color:#ffa700">Example for ElectricCar</h4>

```

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

//properties
console.log(teslaModelS.manufacturer); // Tesla
console.log(teslaModelS.model); //Model S
console.log(teslaModelS.year); // 2023
console.log(teslaModelS.color); //Red
console.log(teslaModelS.licensePlate); // TESLA001
console.log(teslaModelS.mileage); // 0
console.log(teslaModelS.fuelType); // Electric
console.log(teslaModelS.numDoors); // 4
console.log(teslaModelS.numSeats); // 5
console.log(teslaModelS.batteryCapacity); // 85
console.log(teslaModelS.chargeLevel); // 100

//methods
console.log(teslaModelS.start()); // Tesla Model S engine started.
console.log(teslaModelS.accelerate(60)); // Tesla Model S is accelerating to 60 mph.
console.log(teslaModelS.driveElectric()); // Tesla Model S is driving using electric power.
console.log(teslaModelS.checkChargeLevel()); // Tesla Model S has 100% charge.
console.log(teslaModelS.stop()); // Tesla Model S engine stopped.
console.log(teslaModelS.charge()); // Tesla Model S is charging.
```

## question2.js  [11]

<h3 style="color:#215dc8">
Problem 2: Create a class hierarchy using constructor functions that model a university system.
</h3>

- Create a class hierarchy using constructor functions that model a university system.

- The hierarchy should include four constructor functions: **`Person`**, **`Student`**, **`Professor`**, and **`TeachingAssistant`**.

- The **`Student`** constructor should inherit from **`Person`**, and both **`Professor`** and **`TeachingAssistant`** should inherit from **`Person`**.

- Each constructor should have its own properties and methods, and all constructors should use the **`.call`** method to properly set the context for inheritance. `except the parent class`

- Additionally, each constructor should override the **`toString`** method of **`Person`** to provide a custom string representation.

- Create instances of each constructor and demonstrate the inheritance chain and custom string representations.

**Here is the hierarchical tree representation:**

```jsx
                  Person
                     |
          ---------------------------
          |                          |
          |                    ---------------
          |                    |             |
        Student            Professor   TeachingAssistant

```

1. **Person**:
    - **`properties`**:
        1. `name` (String): The name of the person.
        2. `age` (number): The age of the person.
        3. `gender` (String): The gender of the person.
    - **`Methods`**:
        1. `introduce()`: **`returns`** a string as `Hello, my name is {name}. I am {age} years old and identify as {gender}.`
        2. `greet()`: **`returns`** a string as `Greetings from {name}!`

<h4 style="color:#ffa700">Example for Person</h4>

```
const person1 = new Person('Alice', 30, 'female');

//properties
console.log(person1.name); // Alice
console.log(person1.age); // 30
console.log(person1.gender); // female

//methods
console.log(person1.introduce()); //Hello, my name is Alice. I am 30 years old and identify as female.
console.log(person1.greet());     //Greetings from Alice!

```
2. **Student** (inherits from Person):
    - **`Additional properties`**:
        1. `studentID` (String): The unique identifier for the student.
        2. `major` (String): The field of study or major of the student.
    - **`Additional methods`**:
        1. `enroll(course)`: **`returns`** a string as `{name} is enrolling in {course}.`
           - where `course` is input for example `Computer network`
        2. `submitAssignment(assignment)`: **`returns`** a string as `{name} is submitting {assignment} for evaluation.`
           - where `assignment` is input for example `Network Protocols`
        3. `getGrades()`: **`returns`** a string as `{name} is retrieving their grades.`
        4. `toString()`: **`returns`** a string as `Student: {name}, Major: {major}`

  <h4 style="color:#ffa700">Example for Student</h4>

```
const student1 = new Student(
  "Alice",
  20,
  "Female",
  "ST12345",
  "Computer Science"
);
//properties
console.log(student1.name); // Alice
console.log(student1.age); // 20
console.log(student1.gender); // Female
console.log(student1.studentID); // ST12345
console.log(student1.major); // Computer Science

//methods
console.log(student1.introduce()); // Hello, my name is Alice. I am 20 years old and identify as Female.
console.log(student1.greet()); // Greetings from Alice!
console.log(student1.enroll("Computer Networks")); // Alice is enrolling in Computer Networks.
console.log(student1.submitAssignment("Network Protocols")); // Alice is submitting Network Protocols for evaluation.
console.log(student1.getGrades()); // Alice is retrieving their grades.
console.log(student1.toString()); // Student: Alice, Major: Computer Science

```
3. **Professor** (inherits from Person):
    - **`Additional properties`**:
        1. `employeeID` (String): The unique identifier for the professor.
        2. `department` (String): The department in which the professor works.
    - **`Additional methods`**:
        1. `teach(course)`: **`returns`** a string as `${name} is teaching {course}.`
          - where `course` is input for example `Computer network`
        2. `gradeAssignment(assignment)`: **`returns`** a string as `{name} is grading ${assignment}.`
           - where `assignment` is input for example `Network Protocols`
        3. `holdOfficeHours()`: **`returns`** a string as `{name} is holding office hours.`
        4. `toString()`:**`returns`** a string as `Professor: {name}, Department: {department}`

  <h4 style="color:#ffa700">Example for Professor</h4>

```
const professor1 = new Professor(
  "Dr. Smith",
  45,
  "Male",
  "EMP123",
  "Computer Science"
);

//properties
console.log(professor1.name); // Dr. Smith
console.log(professor1.age); // 45
console.log(professor1.gender); // Male
console.log(professor1.employeeID); // EMP123
console.log(professor1.department); // Computer Science

//methods
console.log(professor1.introduce()); // Hello, my name is Dr. Smith. I am 45 years old and identify as Male.
console.log(professor1.greet()); // Greetings from Dr. Smith!
console.log(professor1.teach("Software Engineering")); // Dr. Smith is teaching Software Engineering.
console.log(professor1.gradeAssignment("Final Project")); // Dr. Smith is grading Final Project.
console.log(professor1.holdOfficeHours()); // Dr. Smith is holding office hours.
console.log(professor1.toString()); // Professor: Dr. Smith, Department: Computer Science

```
4. **TeachingAssistant** (inherits from Person):
    - **`Additional properties`**:
        1. `employeeID` (String): The unique identifier for the teaching assistant.
        2. `course` (String): The course for which the teaching assistant provides assistance.
    - **`Additional methods`**:
        1. `assistProfessor()`: **`returns`** a string as `{name} is assisting the professor.`
        2. `provideFeedback(assignment)`: **`returns`** a string as `{name} is providing feedback on {assignment}.`
            - where `assignment` is input for example `Network Protocols`
        3. `scheduleOfficeHours()`: **`returns`** a string as `{name} is scheduling office hours.`
        4. `toString()`: **`returns`** a string as `Teaching Assistant: {name}, Course: {course}`


  <h4 style="color:#ffa700">Example for TeachingAssistant</h4>

```
const ta1 = new TeachingAssistant(
  "John",
  25,
  "Male",
  "TA987",
  "Data Structures"
);

//properties
console.log(ta1.name); // John
console.log(ta1.age); // 25
console.log(ta1.gender); // Male
console.log(ta1.employeeID); // TA987
console.log(ta1.course); // Data Structures

// methods
console.log(ta1.introduce()); // Hello, my name is John. I am 25 years old and identify as Male.
console.log(ta1.greet()); // Greetings from John!
console.log(ta1.assistProfessor()); // John is assisting the professor.
console.log(ta1.provideFeedback("Homework 3")); // John is providing feedback on Homework 3.
console.log(ta1.scheduleOfficeHours()); // John is scheduling office hours.
console.log(ta1.toString()); // Teaching Assistant: John, Course: Data Structures

```


## question3.js  [16]

<h3 style="color:#215dc8">
Problem 3: Implement a class hierarchy using constructor functions that model different types of employees in a company.
</h3>

- The hierarchy should include three constructor functions: **`Employee`**, **`Manager`**, and **`Executive`**. The **`Manager`** constructor should inherit from **`Employee`**, and **`Executive`** should inherit from **`Manager`**.

- Each constructor should have its own properties and methods, and all constructors should use the **`.call`** method to properly set the context for inheritance. `except the parent class`

**Here is the hierarchical tree representation:**

```jsx
                   Employee
                       |
                     Manager
                       |
                   Executive

```

1. **Employee**:
    - **`properties`**:
        1. `employeeID` (String): The unique identifier for the employee.
        2. `name` (String): The name of the employee.
        3. `age` (number): The age of the employee.
        4. `department` (String): The department in which the employee works.
    - **`Methods`**:
        1. `getEmployeeID()`: **`returns`** a string as `employeeID`
        2. `introduce()`: **`returns`** a string as `Hello, my name is {name}. I work in the {department} department.`
        3. `performWork()`: **`returns`** a string as `{name} is performing their work duties.`

 <h4 style="color:#ffa700">Example for Employee</h4>

```
const employee = new Employee("E123", "John Doe", 30, "IT");

//properties
console.log(employee.employeeID); // E123
console.log(employee.name); // John Doe
console.log(employee.age); // 30
console.log(employee.department); // IT

//methods
console.log(employee.getEmployeeID()); //E123
console.log(employee.introduce()); //Hello, my name is John Doe. I work in the IT department.
console.log(employee.performWork()); //John Doe is performing their work duties.

```
2. **Manager** (inherits from Employee):
    - **`Additional properties`**:
        1. `teamSize` (number): The number of employees managed by the manager.
        2. `reports` *(array)*: A list of employees who report to the manager.
    - **`Additional methods`**:
        1. `assignTask(task, employee)`: **`returns`** a string as `{name} assigned the task "{task}" to {employee.name}.`
           - where *task* and *employee* are input.
             1. task is a string for example - Project presentation
             2. employee is an *object* as 
             ```
              Employee {
                employeeID: 'E123',
                name: 'John Doe',
                age: 30,
                department: 'IT'
                 }
             ```
        2. `conductMeeting()`: **`returns`** a string as `{name} is conducting a meeting with their team.`
        3. `reviewPerformance(employee)`: **`returns`** a string as `{name} is reviewing the performance of {employee.name}.`
            - where *employee* is input.
             1. employee is an *object* as 
                ```
                Employee {
                employeeID: 'E123',
                name: 'John Doe',
                age: 30,
                department: 'IT'
                 }
                ```

 <h4 style="color:#ffa700">Example for Manager</h4>

```
const manager = new Manager("M456", "Jane Smith", 40, "HR", 10);

//properties
console.log(manager.employeeID); // M456
console.log(manager.name); // Jane Smith
console.log(manager.age); // 40
console.log(manager.department); // HR
console.log(manager.teamSize); // 10

// methods
console.log(manager.assignTask("Project presentation", employee)); // Jane Smith assigned the task "Project presentation" to John Doe.
console.log(manager.conductMeeting()); // Jane Smith is conducting a meeting with their team.
console.log(manager.reviewPerformance(employee)); // Jane Smith is reviewing the performance of John Doe.

```
3. **Executive** (inherits from Manager):
    - **`Additional properties`**:
        1. `stockOptions` (number): The number of stock options granted to the executive.
        2. `executiveLevel` (String): The level or rank of the executive within the organization.
    - **`Additional methods`**:
        1. `makeStrategicDecisions()`: **`returns`** a string as `{name} is making strategic decisions for the organization.`
        2. `approveBudget()`: **`returns`** a string as `{name} is approving the budget for various departments.`
        3. `representCompany()`: **`returns`** a string as `{name} is representing the company in external meetings or events.`


 <h4 style="color:#ffa700">Example for Executive</h4>

```
const executive = new Executive(
  "X789",
  "Alice Johnson",
  50,
  "Finance",
  5,
  10000,
  "CFO"
);
//properties
console.log(executive.employeeID); //X789
console.log(executive.name); //Alice Johnson
console.log(executive.age); //50
console.log(executive.department); //Finance
console.log(executive.teamSize); //5
console.log(executive.stockOptions); //10000
console.log(executive.executiveLevel); //CFO

//methods
console.log(executive.makeStrategicDecisions()); // Alice Johnson is making strategic decisions for the organization.
console.log(executive.approveBudget()); // Alice Johnson is approving the budget for various departments.
console.log(executive.representCompany()); // Alice Johnson is representing the company in external meetings or events.

```
#### The Problem is tested on CP

<img src="https://i.imgur.com/EPTV29m.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
